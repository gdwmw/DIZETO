"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import FormActionButton from "@/src/components/form-action-button";
import { Input } from "@/src/components/interfaces/inputs/input";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { HighlightSchema, THighlightSchema } from "@/src/schemas/home";
import { IHighlight, ITitle } from "@/src/types/api";
import { PUTHighlight, PUTImages, PUTTitle } from "@/src/utils/api";

type T = {
  data: IHighlight | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
};

const HighlightForm: FC<T> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<THighlightSchema>({
    defaultValues: { data: { ...props.data }, title: { ...props.title } },
    resolver: zodResolver(HighlightSchema),
  });

  // TODO: Nanti perbaiki error handle nya
  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
    onError: () => setLoading(false),
    onSuccess: async () => await queryClient.invalidateQueries({ queryKey: ["GETTitle"] }),
  });

  const handleUpdateHighlight = useMutation({
    mutationFn: PUTHighlight,
    onError: () => setLoading(false),
  });

  const handleUpdateimages = useMutation({
    mutationFn: PUTImages,
    onError: () => setLoading(false),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETHighlight"] });
      props.setOpenForm(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<THighlightSchema> = async (data) => {
    setLoading(true);
    handleUpdateTitle.mutate(data.title);
    await handleUpdateHighlight.mutateAsync(data.data);
    await handleUpdateimages.mutateAsync(data.data.images);
    setLoading(false);
  };

  const INPUT_FIELDS_DATA = [
    { errorMessage: errors.title?.title?.message, label: "Title", name: "title.title", tag: "input", type: "text" },
    { errorMessage: errors.title?.titleRed?.message, label: "Title Red", name: "title.titleRed", tag: "input", type: "text" },
    { errorMessage: errors.data?.copyright?.message, label: "Copyright", name: "data.copyright", tag: "input", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className="max-w-[1000px]">
        <Title title="UPDATE " titleRed="HIGHLIGHT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {INPUT_FIELDS_DATA.map((dt) => (
            <Input
              color="black"
              disabled={loading}
              errorMessage={dt.errorMessage}
              key={dt.name}
              label={dt.label}
              type={dt.type}
              {...register(dt.name as any)}
            />
          ))}

          {props.data?.images.map((dt, index) => (
            <div className="grid grid-cols-2 gap-3" key={dt.id}>
              <Input
                color="black"
                disabled={loading}
                errorMessage={errors.data?.images?.[index]?.message}
                label={`Thumbnail URL ${index + 1}`}
                type="text"
                {...register(`data.images.${index}.thumbnailURL`)}
              />
              <Input
                color="black"
                disabled={loading}
                errorMessage={errors.data?.images?.[index]?.message}
                label={`Image URL ${index + 1}`}
                type="text"
                {...register(`data.images.${index}.imgURL`)}
              />
            </div>
          ))}

          <FormActionButton
            loading={loading}
            onClick={() => {
              props.setOpenForm(false);
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

export default HighlightForm;
