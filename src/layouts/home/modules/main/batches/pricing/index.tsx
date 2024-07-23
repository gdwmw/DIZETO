"use client";

import { FC, ReactElement, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { FaEdit } from "react-icons/fa";

import { Button } from "@/src/components/interfaces/buttons/button";
import { CardPackage } from "@/src/components/interfaces/cards/card-package";
import { ContainerPaper, ContentPaper } from "@/src/components/interfaces/paper";
import { Title } from "@/src/components/interfaces/title";
import { GETPricing, GETTitle, IPricing } from "@/src/utils/api";
const PricingForm = dynamic(() => import("../forms/pricing-form"));

export const Pricing: FC = (): ReactElement => {
  const { data: dataTitle } = useQuery({
    queryFn: GETTitle,
    queryKey: ["GETTitle"],
  });
  const { data: dataPricing } = useQuery({
    queryFn: GETPricing,
    queryKey: ["GETPricing"],
  });

  const [openForm, setOpenForm] = useState(false);
  const [dataPricingSelection, setDataPricingSelection] = useState<IPricing>();
  const [isEditTitle, setIsEditTitle] = useState(false);

  return (
    <>
      <ContainerPaper id="pricing">
        <ContentPaper className="relative pb-7">
          <Button
            className="absolute right-3 top-3"
            color="black"
            onClick={() => {
              setDataPricingSelection(dataPricing?.[0]);
              setIsEditTitle(true);
              setOpenForm(true);
            }}
            size="sm"
            type="button"
            variant="ghost"
          >
            <FaEdit />
          </Button>

          <Title title={dataTitle?.[2].title} titleRed={dataTitle?.[2].titleRed} />

          <div className="mt-5 grid gap-5 sm:mt-0 sm:grid-cols-2 xl:grid-cols-4">
            {dataPricing?.map((dt) => (
              <CardPackage key={dt.id} onClick={() => setOpenForm(true)} setDataPricingSelection={setDataPricingSelection} {...dt} />
            ))}
          </div>
        </ContentPaper>
      </ContainerPaper>

      {openForm && (
        <PricingForm
          data={dataPricingSelection}
          isEditTitle={isEditTitle}
          setIsEditTitle={setIsEditTitle}
          setOpenForm={setOpenForm}
          title={dataTitle?.[2]}
        />
      )}
    </>
  );
};
