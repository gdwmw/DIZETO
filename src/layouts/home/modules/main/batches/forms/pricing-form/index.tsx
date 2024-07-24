"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/src/components/interfaces/buttons/button";
import { Input } from "@/src/components/interfaces/inputs/input";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { IPricing, ITitle } from "@/src/types/api";
import { PUTListItem, PUTPricing, PUTTitle } from "@/src/utils/api";

import { Schema, TSchema } from "./Schema";

type T = {
  data: IPricing | undefined;
  isEditTitle: boolean;
  setIsEditTitle: (value: boolean) => void;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
};

const PricingForm: FC<T> = ({ data, isEditTitle, setIsEditTitle, setOpenForm, title }): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TSchema>({
    defaultValues: { data: { ...data }, title: { ...title } },
    resolver: zodResolver(Schema),
  });

  const { append, fields, remove } = useFieldArray({ control, name: "data.listItem.0.list" });

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
    onError: () => setLoading(false),
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
      setIsEditTitle(false);
      setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const handleUpdatePricing = useMutation({
    mutationFn: PUTPricing,
  });

  const handleUpdate = useMutation({
    mutationFn: PUTListItem,
    onError: () => setLoading(false),
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETPricing"] });
      setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TSchema> = async (data) => {
    isEditTitle && handleUpdateTitle.mutate(data.title);
    !isEditTitle && handleUpdatePricing.mutate(data.data);
    !isEditTitle && handleUpdate.mutate(data.data.listItem[0]);
  };

  return (
    <ContainerModal>
      <ContentModal className={`${isEditTitle ? "max-w-[500px]" : "max-w-[1000px]"}`}>
        <Title title="UPDATE " titleRed={isEditTitle ? "PRICING" : `PACKAGE ${data?.id}`} />
        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {isEditTitle && (
            <>
              <Input color="black" errorMessage={errors.title?.title?.message} label="Title" type="text" {...register("title.title")} />
              <Input color="black" errorMessage={errors.title?.titleRed?.message} label="Title Red" type="text" {...register("title.titleRed")} />
            </>
          )}
          {!isEditTitle && (
            <>
              <Input color="black" errorMessage={errors.data?.price?.message} label="Price" type="text" {...register("data.price")} />
              <Input color="black" errorMessage={errors.data?.pack?.message} label="Package" type="text" {...register("data.pack")} />
              <Input color="black" errorMessage={errors.data?.category?.message} label="Category" type="text" {...register("data.category")} />
              <div className="grid grid-cols-2 gap-3 font-semibold">
                <Button color="red" onClick={() => fields.length < 10 && append({ label: "", qty: 0 })} size="sm" type="button" variant="outline">
                  Add
                </Button>
                <Button color="red" onClick={() => remove(fields.length - 1)} size="sm" type="button" variant="outline">
                  Remove
                </Button>
              </div>
              {fields.map((dt, index) => (
                <div className="grid grid-cols-2 gap-3" key={dt.id}>
                  <Input
                    color="black"
                    errorMessage={errors.data?.listItem?.[0]?.list?.[index]?.qty?.message}
                    label={`Quantity ${index + 1}`}
                    type="number"
                    {...register(`data.listItem.0.list.${index}.qty`, {
                      valueAsNumber: true,
                    })}
                  />
                  <Input
                    color="black"
                    errorMessage={errors.data?.listItem?.[0]?.list?.[index]?.label?.message}
                    label={`Label ${index + 1}`}
                    type="text"
                    {...register(`data.listItem.0.list.${index}.label`)}
                  />
                </div>
              ))}
            </>
          )}
          <div className="grid grid-cols-2 gap-3 font-semibold sm:flex sm:items-center">
            <Button className="sm:w-full" color="red" disabled={loading} size="sm" type="submit" variant="outline">
              Update
            </Button>
            <Button
              color="red"
              disabled={loading}
              onClick={() => {
                reset();
                setIsEditTitle(false);
                setOpenForm(false);
              }}
              size="sm"
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
          </div>
        </form>
      </ContentModal>
    </ContainerModal>
  );
};

export default PricingForm;
