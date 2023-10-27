"use client";

import React, { useEffect, useState } from "react";
import LandingPage from "@/types/landingPage";
import InputNumber from "../inputs/InputNumber";
import InputText from "../inputs/InputText";
import Select from "../inputs/Select";
import TextArea from "../inputs/TextArea";
import landingPageDB from "@/database/landingpage.json";
import { signOut } from "next-auth/react";

export default function Main() {
  const [response, setResponse] = useState<LandingPage.LandingPageData[]>([]);
  const [preset, setPreset] = useState<number>(0);
  const [value, setValue] = useState<LandingPage.LandingPageData[]>([
    {
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
    },
  ]);

  async function fetchData() {
    fetch("https://6536584abb226bb85dd1f31f.mockapi.io/landingpage")
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((error) => console.error("Error fetching data: " + error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (response[preset] !== undefined) {
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
      setValue([updatedValue]);
    }
  }, [preset, response]);

  // TODO Jangan lupa pertimbangkan untuk metode fecth nya lebih baik menggunakan try and catch atau metode ini

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedValue = value[preset];
    fetch(`https://6536584abb226bb85dd1f31f.mockapi.io/landingpage/${updatedValue.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedValue),
    })
      .then(() => {
        fetchData();
        alert("Submitted successfully!");
      })
      .catch((error) => console.error("Error editing data: " + error));
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultValue = landingPageDB[preset];
    fetch(`https://6536584abb226bb85dd1f31f.mockapi.io/landingpage/${defaultValue.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(defaultValue),
    })
      .then(() => {
        fetchData();
        alert("Reset successful!");
      })
      .catch((error) => console.error("Error editing data: " + error));
  };

  const handleInputAbout = (e: React.ChangeEvent<HTMLInputElement>, key: string, listIndex: number) => {
    setValue((prevValue) => {
      const updatedValue: any = [...prevValue];
      updatedValue[preset].about.lang[listIndex][key] = e.target.value;
      return updatedValue;
    });
  };

  const handleInputPresetLandingPagePortfolio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => {
      const updatedValue: any = [...prevValue];
      updatedValue[preset].presetLandingPagePortfolio = e.target.value;
      return updatedValue;
    });
  };

  const handleInputPricing = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number) => {
    setValue((prevValue) => {
      const updatedValue: any = [...prevValue];
      updatedValue[preset].pricing[index][key] = e.target.value;
      return updatedValue;
    });
  };

  const handleInputPricingTitle = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number, indexValue: number) => {
    setValue((prevValue) => {
      const updatedValue: any = [...prevValue];
      updatedValue[preset].pricing[index][key][indexValue] = e.target.value;
      return updatedValue;
    });
  };

  const handleInputPricingList = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number, listIndex: number) => {
    setValue((prevValue) => {
      const updatedValue: any = [...prevValue];
      updatedValue[preset].pricing[index].list[listIndex][key] = e.target.value;
      return updatedValue;
    });
  };

  const handleInputPricingListLabel = (e: React.ChangeEvent<HTMLInputElement>, index: number, listIndex: number, langIndex: number) => {
    setValue((prevValue) => {
      const updatedValue: any = [...prevValue];
      updatedValue[preset].pricing[index].list[listIndex].label.lang[langIndex] = e.target.value;
      return updatedValue;
    });
  };

  return (
    <main className="container mx-auto p-5">
      <section id="About" className="scroll-mt-[84px]">
        <form onSubmit={handleSubmit} className="paper space-y-10 bg-white p-5 dark:bg-dark">
          <div className=" space-x-5">
            <button type="submit" className="red-line-button">
              Submit
            </button>
            <button type="button" className="red-line-button" onClick={handleReset}>
              Reset
            </button>
            <button type="button" className="red-line-button" onClick={() => signOut()}>
              Logout
            </button>
          </div>

          <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
            <legend className="px-2 font-semibold text-red-600">ABOUT</legend>
            <section className="space-y-5">
              <div>
                {value[preset].about.lang.map((lang, index) => (
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
                {value[preset].about.lang.map((lang, index) => (
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
                {value[preset].about.lang.map((lang, index) => (
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
                value={value[preset].presetLandingPagePortfolio}
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
              {value[preset].pricing.map((data, index) => (
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
        </form>
      </section>
    </main>
  );
}
