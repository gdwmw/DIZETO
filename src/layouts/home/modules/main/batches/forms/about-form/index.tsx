"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import FormActionButton from "@/src/components/form-action-button";
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

const AboutForm: FC<T> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TAboutSchema>({
    defaultValues: { data: { ...props.data }, title: { ...props.title } },
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
      props.setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TAboutSchema> = async (data) => {
    handleUpdateTitle.mutate(data.title);
    handleUpdate.mutate(data.data);
  };

  const INPUT_FIELDS = [
    { errorMessage: errors.title?.title?.message, label: "Title", name: "title.title", tag: "input", type: "text" },
    { errorMessage: errors.title?.titleRed?.message, label: "Title Red", name: "title.titleRed", tag: "input", type: "text" },
    { errorMessage: errors.data?.subTitle?.message, label: "Sub Title", name: "data.subTitle", tag: "input", type: "text" },
    { errorMessage: errors.data?.description?.message, label: "Description", name: "data.description", tag: "textarea" },
    { errorMessage: errors.data?.note?.message, label: "Note", name: "data.note", tag: "input", type: "text" },
    { errorMessage: errors.data?.logoURL?.message, label: "Logo URL", name: "data.logoURL", tag: "input", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className="max-w-[500px]">
        <Title title="UPDATE " titleRed="ABOUT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {INPUT_FIELDS.map((field) =>
            field.tag === "input" ? (
              <Input
                color="black"
                disabled={loading}
                errorMessage={field.errorMessage}
                key={field.name}
                label={field.label}
                type={field.type}
                {...register(field.name as any)}
              />
            ) : (
              <TextArea
                color="black"
                disabled={loading}
                errorMessage={field.errorMessage}
                key={field.name}
                label={field.label}
                {...register(field.name as any)}
              />
            ),
          )}

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

export default AboutForm;
