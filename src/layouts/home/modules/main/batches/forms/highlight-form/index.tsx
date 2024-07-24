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
import { PUTHighlight, PUTImageFile, PUTTitle } from "@/src/utils/api";

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

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
    },
  });

  const handleUpdateHighlight = useMutation({
    mutationFn: PUTHighlight,
  });

  const handleUpdate = useMutation({
    mutationFn: PUTImageFile,
    onError: () => setLoading(false),
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETHighlight"] });
      props.setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<THighlightSchema> = async (data) => {
    handleUpdateTitle.mutate(data.title);
    handleUpdateHighlight.mutate(data.data);
    handleUpdate.mutate(data.data.imageFile);
  };

  const INPUT_FIELDS = [
    { errorMessage: errors.title?.title?.message, label: "Title", name: "title.title", tag: "input", type: "text" },
    { errorMessage: errors.title?.titleRed?.message, label: "Title Red", name: "title.titleRed", tag: "input", type: "text" },
    { errorMessage: errors.data?.copyright?.message, label: "Copyright", name: "data.copyright", tag: "input", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className="max-w-[1000px]">
        <Title title="UPDATE " titleRed="HIGHLIGHT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {INPUT_FIELDS.map((field) => (
            <Input
              color="black"
              disabled={loading}
              errorMessage={field.errorMessage}
              key={field.name}
              label={field.label}
              type={field.type}
              {...register(field.name as any)}
            />
          ))}

          {props.data?.imageFile.map((dt, index) => (
            <div className="grid grid-cols-2 gap-3" key={dt.id}>
              <Input
                color="black"
                disabled={loading}
                errorMessage={errors.data?.imageFile?.[index]?.message}
                label={`Thumbnail URL ${index + 1}`}
                type="text"
                {...register(`data.imageFile.${index}.thumbnailURL`)}
              />
              <Input
                color="black"
                disabled={loading}
                errorMessage={errors.data?.imageFile?.[index]?.message}
                label={`Image URL ${index + 1}`}
                type="text"
                {...register(`data.imageFile.${index}.imgURL`)}
              />
            </div>
          ))}

          <FormActionButton
            loading={loading}
            onClick={() => {
              reset();
              props.setOpenForm(false);
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
