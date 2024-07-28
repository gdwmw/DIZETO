"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormActionButton, FormSubmitButton } from "@/src/components/form-buttons";
import { Input, TextArea } from "@/src/components/interfaces/inputs";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { PricingSchema, TPricingSchema } from "@/src/schemas/home";
import { IPricing, ITitle } from "@/src/types/api";
import { PUTListItem, PUTPricing, PUTTitle } from "@/src/utils/api";

interface I {
  data: IPricing | undefined;
  isEditTitle: boolean;
  setIsEditTitle: (value: boolean) => void;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
}

const PricingForm: FC<I> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TPricingSchema>({
    defaultValues: { data: props.data, title: props.title },
    resolver: zodResolver(PricingSchema),
  });

  const { append, fields, remove } = useFieldArray({ control, name: "data.listItem.0.list" });

  const handleAppend = () => {
    fields.length < 10 && append({ label: "", qty: 0 });
  };

  const handleRemove = () => {
    fields.length > 0 && remove(fields.length - 1);
  };

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
    onError: () => setLoading(false),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
      props.setOpenForm(false);
      props.setIsEditTitle(false);
      setLoading(false);
      reset();
    },
  });

  const handleUpdatePricing = useMutation({
    mutationFn: PUTPricing,
  });

  const handleUpdateListItem = useMutation({
    mutationFn: PUTListItem,
  });

  const onSubmit: SubmitHandler<TPricingSchema> = async (dt) => {
    setLoading(true);

    if (props.isEditTitle) {
      handleUpdateTitle.mutate(dt.title);
    } else {
      try {
        const [resA, resB] = await Promise.all([
          await handleUpdatePricing.mutateAsync(dt.data),
          await handleUpdateListItem.mutateAsync(dt.data.listItem[0]),
        ]);

        // TODO: Nanti perbaiki error handle nya
        if (!resA || !resB) {
          return;
        }

        await queryClient.invalidateQueries({ queryKey: ["GETPricing"] });
        props.setOpenForm(false);
        reset();
      } finally {
        setLoading(false);
      }
    }
  };

  const TITLE_INPUT_FIELDS_DATA = [
    { error: errors.title?.title?.message, id: "1", label: "Title", name: "title.title", type: "text" },
    { error: errors.title?.titleRed?.message, id: "2", label: "Title Red", name: "title.titleRed", type: "text" },
  ];

  const PACKAGE_INPUT_FIELDS_DATA = [
    { error: errors.data?.price?.message, id: "1", label: "Price", name: "data.price", type: "text" },
    { error: errors.data?.pack?.message, id: "2", label: "Package", name: "data.pack", type: "text" },
    { error: errors.data?.category?.message, id: "3", label: "Category", name: "data.category", tag: "textarea" },
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
                key={dt.id}
                label={dt.label}
                type={dt.type}
                {...register(dt.name as keyof TPricingSchema)}
              />
            ))}

          {!props.isEditTitle && (
            <>
              {PACKAGE_INPUT_FIELDS_DATA.map((dt) =>
                !dt.tag ? (
                  <Input
                    color="black"
                    disabled={loading}
                    errorMessage={dt.error}
                    key={dt.id}
                    label={dt.label}
                    type={dt.type}
                    {...register(dt.name as keyof TPricingSchema)}
                  />
                ) : (
                  <TextArea
                    className="min-h-fit resize-none"
                    color="black"
                    disabled={loading}
                    errorMessage={dt.error}
                    key={dt.id}
                    label={dt.label}
                    rows={0}
                    {...register(dt.name as keyof TPricingSchema)}
                  />
                ),
              )}

              <FormActionButton handleAppend={handleAppend} handleRemove={handleRemove} loading={loading} />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fields.map((dt, index) => (
                  <div key={dt.id}>
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
              </div>
            </>
          )}

          <FormSubmitButton
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
