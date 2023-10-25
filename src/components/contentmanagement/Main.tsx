"use client";

import React, { useState, useEffect } from "react";
import InputText from "./inputs/InputText";
import InputNumber from "./inputs/InputNumber";
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
          title: ["", ""],
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
    if (response[preset] !== undefined) {
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

  const handleInputAbout = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].about.lang[index][key] = e.target.value;
      return newValue;
    });
  };

  const handleInputPresetLandingPagePortfolio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].presetLandingPagePortfolio = e.target.value;
      return newValue;
    });
  };

  const handleInputPricing = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].pricing[index][key] = e.target.value;
      return newValue;
    });
  };

  const handleInputPricingTitle = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number, indexValue: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].pricing[index][key][indexValue] = e.target.value;
      return newValue;
    });
  };

  const handleInputPricingList = (e: React.ChangeEvent<HTMLInputElement>, key: string, index: number, listIndex: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].pricing[index].list[listIndex][key] = e.target.value;
      return newValue;
    });
  };

  const handleInputPricingListLabel = (e: React.ChangeEvent<HTMLInputElement>, index: number, listIndex: number, langIndex: number) => {
    setValue((prevValue) => {
      const newValue: any = [...prevValue];
      newValue[preset].pricing[index].list[listIndex].label.lang[langIndex] = e.target.value;
      return newValue;
    });
  };

  return (
    <main className="container mx-auto px-5 pt-10">
      <form className="paper space-y-5 bg-white p-5 dark:bg-dark">
        {/* ABOUT */}
        <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
          <legend className="px-2 text-xl font-semibold text-red-600">ABOUT</legend>
          <section>
            <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
              <legend className="px-2 text-xl font-semibold text-red-600">TITLE</legend>
              {/* -------------------------------------------------------- */}
              {value[preset].about.lang.map((lang, index) => (
                <div key={index}>
                  <h1>{index === 0 ? "- EN :" : "- ID :"}</h1>
                  <div className="flex gap-2">
                    <InputText
                      width={200}
                      id={`Title Red Text ${index}`}
                      label="Title Red Text"
                      value={lang.titleRedTxt}
                      onChange={(e) => handleInputAbout(e, "titleRedTxt", index)}
                    />
                    <InputText
                      width={0}
                      id={`Title ${index}`}
                      label="Title"
                      value={lang.title}
                      onChange={(e) => handleInputAbout(e, "title", index)}
                    />
                  </div>
                </div>
              ))}
              {/* -------------------------------------------------------- */}
            </fieldset>
          </section>

          <section>
            <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
              <legend className="px-2 text-xl font-semibold text-red-600">DESCRIPTION</legend>
              <div className="space-y-2">
                {/* -------------------------------------------------------- */}
                {value[preset].about.lang.map((lang, index: number) => (
                  <div key={index}>
                    <h1>{index === 0 ? "- EN :" : "- ID :"}</h1>
                    <div className="flex gap-2">
                      <InputText
                        width={200}
                        id={`Desc Red Text ${index}`}
                        label="Desc Red Text"
                        value={lang.descRedTxt}
                        onChange={(e) => handleInputAbout(e, "descRedTxt", index)}
                      />
                      <InputText
                        width={0}
                        id={`Description ${index}`}
                        label="Description"
                        value={lang.desc}
                        onChange={(e) => handleInputAbout(e, "desc", index)}
                      />
                    </div>
                  </div>
                ))}
                {/* -------------------------------------------------------- */}
              </div>
            </fieldset>
          </section>

          <section>
            <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
              <legend className="px-2 text-xl font-semibold text-red-600">NOTE</legend>
              <div className="space-y-2">
                {/* -------------------------------------------------------- */}
                {value[preset].about.lang.map((lang, index: number) => (
                  <div key={index}>
                    <h1>{index === 0 ? "- EN :" : "- ID :"}</h1>
                    <div className="flex gap-2">
                      <InputText width={0} id={`Note ${index}`} label="Note" value={lang.note} onChange={(e) => handleInputAbout(e, "note", index)} />
                    </div>
                  </div>
                ))}
                {/* -------------------------------------------------------- */}
              </div>
            </fieldset>
          </section>
        </fieldset>
        {/* END ABOUT */}

        {/* PRESET LANDING PAGE PORTFOLIO */}
        <section>
          <InputNumber
            width={0}
            id={`Preset Landing Page Portfolio`}
            label="Preset Landing Page Portfolio"
            value={value[preset].presetLandingPagePortfolio}
            onChange={handleInputPresetLandingPagePortfolio}
          />
        </section>
        {/* END PRESET LANDING PAGE PORTFOLIO */}

        <section className="space-y-5">
          {/* -------------------------------------------------------- */}
          {value[preset].pricing.map((data, index) => (
            <div key={index}>
              <fieldset className="rounded-md border-2 border-red-600 px-3 pb-2">
                <legend className="px-2 text-xl font-semibold text-red-600">{`Pricing Item ${index + 1}`}</legend>
                <div className="space-y-2">
                  <div>
                    <InputText
                      width={0}
                      id={`Price ${index}`}
                      label="Price"
                      value={data.price}
                      onChange={(e) => handleInputPricing(e, "price", index)}
                    />
                  </div>
                  <div>
                    <InputText
                      width={0}
                      id={`Package ${index}`}
                      label="Package"
                      value={data.package}
                      onChange={(e) => handleInputPricing(e, "package", index)}
                    />
                  </div>
                  <div className="flex gap-2">
                    {/* -------------------------------------------------------- */}
                    {data.title.map((title, titleIndex) => (
                      <InputText
                        key={titleIndex}
                        width={0}
                        id={`Title${titleIndex} ${index}`}
                        label="Title"
                        value={title}
                        onChange={(e) => handleInputPricingTitle(e, "title", index, titleIndex)}
                      />
                    ))}
                    {/* -------------------------------------------------------- */}
                  </div>
                  <div>
                    {/* -------------------------------------------------------- */}
                    {data.list.map((listData, listIndex) => (
                      <div key={listIndex}>
                        <InputNumber
                          width={0}
                          id={`List Quantity ${listIndex}-${index}`}
                          label="Quantity"
                          value={listData.qty}
                          onChange={(e) => handleInputPricingList(e, "qty", index, listIndex)}
                        />
                        {listData.label.lang.map((lang, langIndex) => (
                          <div key={langIndex}>
                            <h1>{langIndex === 0 ? "- EN :" : "- ID :"}</h1>
                            <InputText
                              width={0}
                              id={`List Label ${langIndex}-${listIndex}-${index}`}
                              label="Label"
                              value={lang}
                              onChange={(e) => handleInputPricingListLabel(e, index, listIndex, langIndex)}
                            />
                          </div>
                        ))}
                        {/* -------------------------------------------------------- */}
                      </div>
                    ))}
                  </div>
                </div>
              </fieldset>
            </div>
          ))}
          {/* -------------------------------------------------------- */}
        </section>
      </form>
    </main>
  );
}
