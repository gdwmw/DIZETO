"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/interfaces/buttons/button";
import { Input } from "@/interfaces/inputs/input";
import { ContainerModal, ContentModal } from "@/interfaces/modal";
import { Title } from "@/interfaces/title";
import { IHighlight, ITitle, PUTHighlight, PUTImageFile, PUTTitle } from "@/utils";

import { Schema, TSchema } from "./Schema";

type T = {
  data: IHighlight | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
};

const HighlightForm: FC<T> = ({ data, setOpenForm, title }): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TSchema>({
    defaultValues: { data: { ...data }, title: { ...title } },
    resolver: zodResolver(Schema),
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
      setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TSchema> = async (data) => {
    handleUpdateTitle.mutate(data.title);
    handleUpdateHighlight.mutate(data.data);
    handleUpdate.mutate(data.data.imageFile);
  };

  return (
    <ContainerModal>
      <ContentModal className="max-w-[1000px]">
        <Title title="UPDATE " titleRed="HIGHLIGHT" />
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Input color="black" errorMessage={errors.title?.title?.message} label="Title" type="text" {...register("title.title")} />
          <Input color="black" errorMessage={errors.title?.titleRed?.message} label="Title Red" type="text" {...register("title.titleRed")} />
          <Input color="black" errorMessage={errors.data?.copyright?.message} label="Copyright" type="text" {...register("data.copyright")} />
          {data?.imageFile.map((_, index) => (
            <div className="grid grid-cols-2 gap-3" key={index}>
              <Input
                color="black"
                errorMessage={errors.data?.imageFile?.[index]?.message}
                label={`Thumbnail URL ${index + 1}`}
                type="text"
                {...register(`data.imageFile.${index}.thumbnailURL`)}
              />
              <Input
                color="black"
                errorMessage={errors.data?.imageFile?.[index]?.message}
                label={`Image URL ${index + 1}`}
                type="text"
                {...register(`data.imageFile.${index}.imgURL`)}
              />
            </div>
          ))}
          <div className="flex items-center gap-2 font-semibold">
            <Button className="w-full" color="red" disabled={loading} size="sm" type="submit" variant="outline">
              Update
            </Button>
            <Button
              color="red"
              disabled={loading}
              onClick={() => {
                reset();
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

export default HighlightForm;
