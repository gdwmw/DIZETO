"use client";

import React, { useState, useEffect } from "react";
import InputText from "./inputs/InputText";
import LandingPage from "../landingPage/landingPage";

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
          title: {
            lang: [],
          },
          list: [
            {
              qty: 0,
              label: {
                lang: ["", ""],
              },
            },
          ],
        },
      ],
      testimony: [
        {
          id: 0,
          name: "",
          status: "-",
          comment: { lang: ["", ""] },
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://6536584abb226bb85dd1f31f.mockapi.io/landingpage");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (response[preset]) {
      const updatedValue: LandingPage.LandingPageData = {
        id: 0,
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
          title: { lang: data.title.lang.map((data) => [...data]) },
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].about.lang[index][key] = e.target.value;
      return newValue;
    });
  };

  const handlePricingInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].pricing[index][key] = e.target.value;
      return newValue;
    });
  };

  const handlePricingListInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number, listIndex: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].pricing[index].list[listIndex][key] = e.target.value;
      return newValue;
    });
  };

  return (
    <main className="container mx-auto px-5 pt-10">
      <form>
        {/* ABOUT */}
        <section id="About">
          <div className="paper space-y-5 bg-white p-5 dark:bg-dark">
            <section>
              <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
                <legend className="px-2 text-xl font-semibold text-red-600">TITLE</legend>
                <div className="space-y-2">
                  {value[preset].about.lang.map((data, index: number) => (
                    <div key={index}>
                      <h1>{index === 0 ? "- EN :" : "- ID :"}</h1>
                      <div className="flex gap-2">
                        <InputText
                          width={200}
                          id={`Title Red Text ${index}`}
                          label="Title Red Text"
                          value={data.titleRedTxt}
                          onChange={(e) => handleInputChange(e, "titleRedTxt", index)}
                        />
                        <InputText
                          width={0}
                          id={`Title ${index}`}
                          label="Title"
                          value={data.title}
                          onChange={(e) => handleInputChange(e, "title", index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </section>

            <section>
              <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
                <legend className="px-2 text-xl font-semibold text-red-600">DESCRIPTION</legend>
                <div className="space-y-2">
                  {value[preset].about.lang.map((data, index: number) => (
                    <div key={index}>
                      <h1>{index === 0 ? "- EN :" : "- ID :"}</h1>
                      <div className="flex gap-2">
                        <InputText
                          width={200}
                          id={`Desc Red Text ${index}`}
                          label="Desc Red Text"
                          value={data.descRedTxt}
                          onChange={(e) => handleInputChange(e, "descRedTxt", index)}
                        />
                        <InputText
                          width={0}
                          id={`Description ${index}`}
                          label="Description"
                          value={data.desc}
                          onChange={(e) => handleInputChange(e, "desc", index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </section>

            <section>
              <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
                <legend className="px-2 text-xl font-semibold text-red-600">NOTE</legend>
                <div className="space-y-2">
                  {value[preset].about.lang.map((data, index: number) => (
                    <div key={index}>
                      <h1>{index === 0 ? "- EN :" : "- ID :"}</h1>
                      <div className="flex gap-2">
                        <InputText
                          width={0}
                          id={`Note ${index}`}
                          label="Note"
                          value={data.note}
                          onChange={(e) => handleInputChange(e, "note", index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </section>

            <section>
              <InputText
                width={0}
                id={`Preset Landing Page Portfolio`}
                label="Preset Landing Page Portfolio"
                value={value[preset].presetLandingPagePortfolio.toString()}
                onChange={(e) => handleInputChange(e, "presetLandingPagePortfolio", 0)}
              />
            </section>

            <section className="space-y-5">
              {value[preset].pricing.map((pricingItem, index) => (
                <div key={index}>
                  <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
                    <legend className="px-2 text-xl font-semibold text-red-600">{`Pricing Item ${index + 1}`}</legend>
                    <div className="space-y-2">
                      <div>
                        <h1>{`- Price:`}</h1>
                        <InputText
                          width={0}
                          id={`Price ${index}`}
                          label="Price"
                          value={pricingItem.price}
                          onChange={(e) => handlePricingInputChange(e, "price", index)}
                        />
                      </div>
                      <div>
                        <h1>{`- Package:`}</h1>
                        <InputText
                          width={0}
                          id={`Package ${index}`}
                          label="Package"
                          value={pricingItem.package}
                          onChange={(e) => handlePricingInputChange(e, "package", index)}
                        />
                      </div>
                      <div>
                        <h1>{`- Title:`}</h1>
                        <InputText
                          width={0}
                          id={`Title ${index}`}
                          label="Title"
                          value={pricingItem.title.lang.join(" | ")}
                          onChange={(e) => handlePricingInputChange(e, "title", index)}
                        />
                      </div>
                      <div>
                        <h1>{`- List:`}</h1>
                        {pricingItem.list.map((listItem, listIndex) => (
                          <div key={listIndex} className="flex gap-2">
                            <InputText
                              width={0}
                              id={`List Quantity ${index}-${listIndex}`}
                              label="Quantity"
                              value={listItem.qty.toString()}
                              onChange={(e) => handlePricingListInputChange(e, "qty", index, listIndex)}
                            />
                            <InputText
                              width={0}
                              id={`List Label ${index}-${listIndex}`}
                              label="Label"
                              value={listItem.label.lang.join(" | ")}
                              onChange={(e) => handlePricingListInputChange(e, "label", index, listIndex)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </fieldset>
                </div>
              ))}
            </section>
          </div>
        </section>
      </form>
    </main>
  );
}
