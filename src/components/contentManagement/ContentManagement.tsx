"use client";

import landingPageDB from "@/database/landingpage.json";
import LandingPage from "@/types/landingPage";
import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import InputNumber from "../inputs/InputNumber";
import InputText from "../inputs/InputText";
import Select from "../inputs/Select";
import TextArea from "../inputs/TextArea";
import OpenAIAss from "./openai/OpenAIAss";

export default function ContentManagement() {
  const [response, setResponse] = useState<LandingPage.LandingPageData[]>([]);
  const [preset, setPreset] = useState<number>(0);
  const [prePreset, setPrePreset] = useState<number>(0);
  const [value, setValue] = useState<LandingPage.LandingPageData>({
    id: 0,
    about: {
      lang: [
        {
          titleRedTxt: "",
          title: "",
          descRedTxt: "",
          desc: "",
          note: "",
        },
        {
          titleRedTxt: "",
          title: "",
          descRedTxt: "",
          desc: "",
          note: "",
        },
      ],
    },
    presetLandingPagePortfolio: 0,
    pricing: [
      {
        id: 0,
        price: "",
        package: "",
        title: [],
        list: [
          {
            qty: 0,
            label: {
              lang: [],
            },
          },
        ],
      },
    ],
    testimony: [
      {
        id: 0,
        name: "",
        status: "",
        comment: { lang: [] },
        image: "",
      },
    ],
    testimonyStatistics: {
      happyClient: 0,
      completedProjects: 0,
      subscriber: 0,
    },
  });

  async function fetchData() {
    fetch("https://653fc4dd45bedb25bfc12e2f.mockapi.io/preset")
      .then((response) => response.json())
      .then((data) => {
        setPreset(data[0].preset);
        setPrePreset(data[0].preset);
      })
      .catch((error) => console.error("Error fetching data: " + error));

    fetch(`https://6536584abb226bb85dd1f31f.mockapi.io/landingpage`)
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => console.error("Error fetching data: " + error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (response[preset] !== undefined && preset !== undefined) {
      const updatedValue: LandingPage.LandingPageData = {
        id: response[preset].id,
        about: {
          lang: response[preset].about.lang.map((data) => ({
            titleRedTxt: data.titleRedTxt,
            title: data.title,
            descRedTxt: data.descRedTxt,
            desc: data.desc,
            note: data.note,
          })),
        },
        presetLandingPagePortfolio: response[preset].presetLandingPagePortfolio,
        pricing: response[preset].pricing.map((data) => ({
          id: data.id,
          price: data.price,
          package: data.package,
          title: data.title.map((data) => data),
          list: data.list.map((data) => ({ qty: data.qty, label: { lang: [...data.label.lang] } })),
        })),
        testimony: response[preset].testimony.map((data) => ({
          id: data.id,
          name: data.name,
          status: data.status,
          comment: { lang: [...data.comment.lang] },
          image: data.image,
        })),
        testimonyStatistics: {
          happyClient: response[preset].testimonyStatistics.happyClient,
          completedProjects: response[preset].testimonyStatistics.completedProjects,
          subscriber: response[preset].testimonyStatistics.subscriber,
        },
      };
      setValue(updatedValue);
    }
  }, [preset, response]);

  // TODO Jangan lupa pertimbangkan untuk metode fecth nya lebih baik menggunakan try and catch atau metode ini

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://6536584abb226bb85dd1f31f.mockapi.io/landingpage/${value.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      if (response.ok) {
        await fetchData();
        alert("Submitted Successful!");
      } else {
        throw new Error("Failed to update data");
      }
    } catch (error) {
      console.error("Error editing data: " + error);
      alert("Failed to update data. Please try again.");
    }
  };

  const handleAddPreset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const defaultValue = landingPageDB[0];
      const response = await fetch("https://6536584abb226bb85dd1f31f.mockapi.io/landingpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultValue),
      });

      if (response.ok) {
        await fetchData();
        alert("Add Preset Successful!");
      } else {
        throw new Error("Failed to add preset");
      }
    } catch (error) {
      console.error("Error editing data: " + error);
      alert("Failed to add preset. Please try again.");
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const defaultValue = landingPageDB[0];
      const res = await fetch(`https://6536584abb226bb85dd1f31f.mockapi.io/landingpage/${value.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultValue),
      });

      if (res.ok) {
        await fetchData();
        alert("Reset Successful!");
      } else {
        throw new Error("Failed to reset data");
      }
    } catch (error) {
      console.error("Error editing data: " + error);
      alert("Failed to reset data. Please try again.");
    }
  };

  const handleSetPreset = async () => {
    try {
      const id = 1;
      const response = await fetch(`https://653fc4dd45bedb25bfc12e2f.mockapi.io/preset/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preset: prePreset }),
      });

      if (response.ok) {
        await fetchData();
        alert("Set Successful!");
      } else {
        throw new Error("Failed to set preset");
      }
    } catch (error) {
      console.error("Error editing data: " + error);
      alert("Failed to set preset. Please try again.");
    }
  };

  const handleSetDelPreset = async () => {
    try {
      const id = 1;
      const response = await fetch(`https://653fc4dd45bedb25bfc12e2f.mockapi.io/preset/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preset: 0 }),
      });

      if (response.ok) {
        await fetchData();
      } else {
        throw new Error("Failed to set preset");
      }
    } catch (error) {
      console.error("Error editing data: " + error);
      alert("Failed to set preset. Please try again.");
    }
  };

  const handleDeletePreset = async () => {
    try {
      const presetIdToDelete: number = response[prePreset].id;
      const res = await fetch(`https://6536584abb226bb85dd1f31f.mockapi.io/landingpage/${presetIdToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        await handleSetDelPreset();
        alert("Delete Successful!");
      } else {
        throw new Error("Failed to delete preset");
      }
    } catch (error) {
      console.error("Error editing data: " + error);
      alert("Failed to delete preset. Please try again.");
    }
  };

  const updateNestedState = (path: any, value: any, prevState: any) => {
    const updatedValue = { ...prevState };

    let current = updatedValue;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    current[path[path.length - 1]] = value;

    return updatedValue;
  };

  const handleInputChange = (e: any, path: any) => {
    const newValue = e.target.value;
    setValue((prevState) => updateNestedState(path, newValue, prevState));
  };

  const handleInputAbout = (e: any, key: any, listIndex: any) => {
    handleInputChange(e, ["about", "lang", listIndex, key]);
  };

  const handleInputPresetLandingPagePortfolio = (e: any) => {
    handleInputChange(e, ["presetLandingPagePortfolio"]);
  };

  const handleInputPricing = (e: any, key: any, index: any) => {
    handleInputChange(e, ["pricing", index, key]);
  };

  const handleInputPricingTitle = (e: any, key: any, index: any, indexValue: any) => {
    handleInputChange(e, ["pricing", index, key, indexValue]);
  };

  const handleInputPricingList = (e: any, key: any, index: any, listIndex: any) => {
    handleInputChange(e, ["pricing", index, "list", listIndex, key]);
  };

  const handleInputPricingListLabel = (e: any, index: any, listIndex: any, langIndex: any) => {
    handleInputChange(e, ["pricing", index, "list", listIndex, "label", "lang", langIndex]);
  };

  return (
    <main className="container mx-auto p-5">
      <section id="About" className="scroll-mt-[84px]">
        <form onSubmit={handleSubmit} className="paper space-y-10 bg-white p-5 dark:bg-dark">
          <div className=" space-x-5">
            <button type="submit" className="red-line-button">
              Submit
            </button>
            <button type="button" className="red-line-button" onClick={handleAddPreset}>
              Add Preset
            </button>
            <button type="button" className="red-line-button" onClick={handleReset}>
              Reset
            </button>
            <button type="button" className="red-line-button" onClick={() => signOut()}>
              Logout
            </button>
          </div>

          <fieldset className="rounded-md border-2 border-red-600 px-3 pb-5 pt-1">
            <legend className="px-2 font-semibold text-red-600">OpenAI Assistant</legend>
            <OpenAIAss />
          </fieldset>

          <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
            <legend className="px-2 font-semibold text-red-600">Content</legend>
            <section className="space-y-3">
              <Select width={"100%"} id="Content Preset" label="Preset" value={prePreset} onChange={(e) => setPrePreset(e.target.value)}>
                {response.map((_, index) => (
                  <option key={index} value={index} className="dark:bg-dark">
                    {index + 1}
                  </option>
                ))}
              </Select>
              <div className="space-x-3">
                <button type="button" className="red-line-button" onClick={handleSetPreset}>
                  Set
                </button>
                {prePreset > 0 && (
                  <button type="button" className="red-line-button" onClick={handleDeletePreset}>
                    Delete
                  </button>
                )}
              </div>
            </section>
          </fieldset>

          <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
            <legend className="px-2 font-semibold text-red-600">ABOUT</legend>
            <section className="space-y-5">
              <div>
                {value.about.lang.map((lang, index) => (
                  <React.Fragment key={index}>
                    <InputText
                      width={"100%"}
                      id={`Title Red Text ${index}`}
                      label={`${index === 0 ? "EN :" : "ID :"} Red Title`}
                      value={lang.titleRedTxt}
                      onChange={(e) => handleInputAbout(e, "titleRedTxt", index)}
                    />
                    <InputText
                      width={"100%"}
                      id={`Title ${index}`}
                      label={`${index === 0 ? "EN :" : "ID :"} Title`}
                      value={lang.title}
                      onChange={(e) => handleInputAbout(e, "title", index)}
                    />
                  </React.Fragment>
                ))}
              </div>

              <div>
                {value.about.lang.map((lang, index) => (
                  <React.Fragment key={index}>
                    <InputText
                      width={"100%"}
                      id={`Desc Red Text ${index}`}
                      label={`${index === 0 ? "EN :" : "ID :"} Red Description`}
                      value={lang.descRedTxt}
                      onChange={(e) => handleInputAbout(e, "descRedTxt", index)}
                    />
                    <TextArea
                      width={"100%"}
                      id={`Description ${index}`}
                      label={`${index === 0 ? "EN :" : "ID :"} Description`}
                      value={lang.desc}
                      onChange={(e) => handleInputAbout(e, "desc", index)}
                    />
                  </React.Fragment>
                ))}
              </div>

              <div>
                {value.about.lang.map((lang, index) => (
                  <React.Fragment key={index}>
                    <div className="flex gap-2">
                      <InputText
                        width={"100%"}
                        id={`Note ${index}`}
                        label={`${index === 0 ? "EN :" : "ID :"} Note`}
                        value={lang.note}
                        onChange={(e) => handleInputAbout(e, "note", index)}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </section>
          </fieldset>

          <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
            <legend className="px-2 font-semibold text-red-600">PORTFOLIO</legend>
            <section>
              <Select
                width={"100%"}
                id={`Preset`}
                label="Preset"
                value={value.presetLandingPagePortfolio}
                onChange={handleInputPresetLandingPagePortfolio}
              >
                <option value="0" className="dark:bg-dark">
                  Mita&apos;s Birthday
                </option>
                <option value="1" className="dark:bg-dark">
                  Ica&apos;s Birthday
                </option>
              </Select>
            </section>
          </fieldset>

          <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
            <legend className="px-2 font-semibold text-red-600">PACKAGE</legend>
            <section className="grid grid-cols-2 gap-5 xl:grid-cols-4">
              {value.pricing.map((data, index) => (
                <fieldset key={index} className="rounded-md border-2 border-red-600 px-3 pb-2">
                  <legend className="px-2 font-semibold text-red-600">{`PRICE CARD ${index + 1}`}</legend>
                  <div>
                    <InputText
                      width={"100%"}
                      id={`Price ${index}`}
                      label="Price"
                      value={data.price}
                      onChange={(e) => handleInputPricing(e, "price", index)}
                    />

                    <InputText
                      width={"100%"}
                      id={`Package ${index}`}
                      label="Package"
                      value={data.package}
                      onChange={(e) => handleInputPricing(e, "package", index)}
                    />
                    <div className="flex gap-2">
                      {data.title.map((title, titleIndex) => (
                        <InputText
                          key={titleIndex}
                          width={"100%"}
                          id={`Title ${titleIndex} ${index}`}
                          label="Title"
                          value={title}
                          onChange={(e) => handleInputPricingTitle(e, "title", index, titleIndex)}
                        />
                      ))}
                    </div>

                    {data.list.map((listData, listIndex) => (
                      <React.Fragment key={listIndex}>
                        <InputNumber
                          width={"100%"}
                          id={`List Quantity ${listIndex} ${index}`}
                          label="Quantity"
                          value={listData.qty}
                          onChange={(e) => handleInputPricingList(e, "qty", index, listIndex)}
                        />
                        <div className="flex gap-2">
                          {listData.label.lang.map((lang, langIndex) => (
                            <React.Fragment key={langIndex}>
                              <InputText
                                width={"100%"}
                                id={`List Label ${langIndex} ${listIndex} ${index}`}
                                label={`${langIndex === 0 ? "EN :" : "ID :"} Label`}
                                value={lang}
                                onChange={(e) => handleInputPricingListLabel(e, index, listIndex, langIndex)}
                              />
                            </React.Fragment>
                          ))}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </fieldset>
              ))}
            </section>
          </fieldset>

          <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
            <legend className="px-2 font-semibold text-red-600">Testimony Statistics</legend>
            <div>
              <InputNumber
                width={"100%"}
                id="Happy Clients"
                label="Happy Clients"
                value={value.testimonyStatistics.happyClient}
                onChange={(e) => {
                  const newValue = { ...value };
                  newValue.testimonyStatistics.happyClient = e.target.value;
                  setValue(newValue);
                }}
              />
              <InputNumber
                width={"100%"}
                id="Completed Projects"
                label="Completed Projects"
                value={value.testimonyStatistics.completedProjects}
                onChange={(e) => {
                  const newValue = { ...value };
                  newValue.testimonyStatistics.completedProjects = e.target.value;
                  setValue(newValue);
                }}
              />
              <InputNumber
                width={"100%"}
                id="Subscribers"
                label="Subscribers"
                value={value.testimonyStatistics.subscriber}
                onChange={(e) => {
                  const newValue = { ...value };
                  newValue.testimonyStatistics.subscriber = e.target.value;
                  setValue(newValue);
                }}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
