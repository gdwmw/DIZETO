"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/src/components/interfaces/buttons/button";
import { Input } from "@/src/components/interfaces/inputs/input";
import { TextArea } from "@/src/components/interfaces/inputs/text-area";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { AboutSchema, TAboutSchema } from "@/src/schemas/home";
import { IAbout, ITitle } from "@/src/types/api";
import { PUTAbout, PUTTitle } from "@/src/utils/api";

type T = {
  data: IAbout | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
};

const AboutForm: FC<T> = ({ data, setOpenForm, title }): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TAboutSchema>({
    defaultValues: { data: { ...data }, title: { ...title } },
    resolver: zodResolver(AboutSchema),
  });

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
    },
  });

  const handleUpdate = useMutation({
    mutationFn: PUTAbout,
    onError: () => setLoading(false),
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETAbout"] });
      setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TAboutSchema> = async (data) => {
    handleUpdateTitle.mutate(data.title);
    handleUpdate.mutate(data.data);
  };

  return (
    <ContainerModal>
      <ContentModal className="max-w-[500px]">
        <Title title="UPDATE " titleRed="ABOUT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          <Input color="black" errorMessage={errors.title?.title?.message} label="Title" type="text" {...register("title.title")} />
          <Input color="black" errorMessage={errors.title?.titleRed?.message} label="Title Red" type="text" {...register("title.titleRed")} />
          <Input color="black" errorMessage={errors.data?.subTitle?.message} label="Sub Title" type="text" {...register("data.subTitle")} />
          <TextArea color="black" errorMessage={errors.data?.description?.message} label="Description" {...register("data.description")} />
          <Input color="black" errorMessage={errors.data?.note?.message} label="Note" type="text" {...register("data.note")} />
          <Input color="black" errorMessage={errors.data?.logoURL?.message} label="Logo URL" type="text" {...register("data.logoURL")} />

          <div className="grid grid-cols-2 gap-3 font-semibold sm:flex sm:items-center">
            <Button className="sm:w-full" color="red" disabled={loading} size="sm" type="submit" variant="outline">
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

export default AboutForm;
