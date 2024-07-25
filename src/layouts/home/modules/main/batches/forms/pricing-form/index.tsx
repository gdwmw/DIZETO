"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import FormActionButton from "@/src/components/form-action-button";
import { Button } from "@/src/components/interfaces/buttons/button";
import { Input } from "@/src/components/interfaces/inputs/input";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { PricingSchema, TPricingSchema } from "@/src/schemas/home";
import { IPricing, ITitle } from "@/src/types/api";
import { PUTListItem, PUTPricing, PUTTitle } from "@/src/utils/api";

type T = {
  data: IPricing | undefined;
  isEditTitle: boolean;
  setIsEditTitle: (value: boolean) => void;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
};

const PricingForm: FC<T> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TPricingSchema>({
    defaultValues: { data: { ...props.data }, title: { ...props.title } },
    resolver: zodResolver(PricingSchema),
  });

  const { append, fields, remove } = useFieldArray({ control, name: "data.listItem.0.list" });

  const handleAppend = () => {
    fields.length < 10 && append({ label: "", qty: 0 });
  };

  const handleRemove = () => {
    fields.length > 0 && remove(fields.length - 1);
  };

  // TODO: Nanti perbaiki error handle nya
  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
    onError: () => setLoading(false),
    onSuccess: async () => await queryClient.invalidateQueries({ queryKey: ["GETTitle"] }),
  });

  const handleUpdatePricing = useMutation({
    mutationFn: PUTPricing,
    onError: () => setLoading(false),
  });

  const handleUpdateListItem = useMutation({
    mutationFn: PUTListItem,
    onError: () => setLoading(false),
    onSuccess: async () => await queryClient.invalidateQueries({ queryKey: ["GETPricing"] }),
  });

  // TODO: Nanti cek lagi kalo API nya sudah tidak RTO lagi
  const onSubmit: SubmitHandler<TPricingSchema> = async (data) => {
    setLoading(true);
    if (props.isEditTitle) {
      await handleUpdateTitle.mutateAsync(data.title);
    } else {
      await handleUpdatePricing.mutateAsync(data.data);
      await handleUpdateListItem.mutateAsync(data.data.listItem[0]);
    }
    props.setOpenForm(false);
    props.setIsEditTitle(false);
    setLoading(false);
    reset();
  };

  const TITLE_INPUT_FIELDS_DATA = [
    { error: errors.title?.title?.message, label: "Title", name: "title.title", type: "text" },
    { error: errors.title?.titleRed?.message, label: "Title Red", name: "title.titleRed", type: "text" },
  ];

  const PACKAGE_INPUT_FIELDS_DATA = [
    { error: errors.data?.price?.message, label: "Price", name: "data.price", type: "text" },
    { error: errors.data?.pack?.message, label: "Package", name: "data.pack", type: "text" },
    { error: errors.data?.category?.message, label: "Category", name: "data.category", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className={`${props.isEditTitle ? "max-w-[500px]" : "max-w-[1000px]"}`}>
        <Title title="UPDATE " titleRed={props.isEditTitle ? "PRICING" : `PACKAGE ${props.data?.id}`} />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {props.isEditTitle &&
            TITLE_INPUT_FIELDS_DATA.map((dt) => (
              <Input
                color="black"
                disabled={loading}
                errorMessage={dt.error}
                key={dt.name}
                label={dt.label}
                type={dt.type}
                {...register(dt.name as any)}
              />
            ))}

          {!props.isEditTitle && (
            <>
              {PACKAGE_INPUT_FIELDS_DATA.map((dt) => (
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={dt.error}
                  key={dt.name}
                  label={dt.label}
                  type={dt.type}
                  {...register(dt.name as any)}
                />
              ))}

              <div className="grid grid-cols-2 gap-3 font-semibold">
                <Button color="red" disabled={loading} onClick={handleAppend} size="sm" type="button" variant="outline">
                  Add
                </Button>
                <Button color="red" disabled={loading} onClick={handleRemove} size="sm" type="button" variant="outline">
                  Remove
                </Button>
              </div>

              {fields.map((dt, index) => (
                <div className="grid grid-cols-2 gap-3" key={dt.id}>
                  <Input
                    color="black"
                    disabled={loading}
                    errorMessage={errors.data?.listItem?.[0]?.list?.[index]?.qty?.message}
                    label={`Quantity ${index + 1}`}
                    type="number"
                    {...register(`data.listItem.0.list.${index}.qty`, {
                      valueAsNumber: true,
                    })}
                  />
                  <Input
                    color="black"
                    disabled={loading}
                    errorMessage={errors.data?.listItem?.[0]?.list?.[index]?.label?.message}
                    label={`Label ${index + 1}`}
                    type="text"
                    {...register(`data.listItem.0.list.${index}.label`)}
                  />
                </div>
              ))}
            </>
          )}

          <FormActionButton
            loading={loading}
            onClick={() => {
              props.setOpenForm(false);
              props.setIsEditTitle(false);
              reset();
            }}
            primaryLabel="Update"
            secondaryLabel="Cancel"
          />
        </form>
      </ContentModal>
    </ContainerModal>
  );
};

export default PricingForm;
