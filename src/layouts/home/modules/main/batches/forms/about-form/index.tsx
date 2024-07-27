"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormSubmitButton } from "@/src/components/form-buttons";
import { Input, TextArea } from "@/src/components/interfaces/inputs";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { AboutSchema, TAboutSchema } from "@/src/schemas/home";
import { IAbout, ITitle } from "@/src/types/api";
import { PUTAbout, PUTTitle } from "@/src/utils/api";

interface I {
  data: IAbout | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
}

const AboutForm: FC<I> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TAboutSchema>({
    defaultValues: { data: props.data, title: props.title },
    resolver: zodResolver(AboutSchema),
  });

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
  });

  const handleUpdateAbout = useMutation({
    mutationFn: PUTAbout,
  });

  const onSubmit: SubmitHandler<TAboutSchema> = async (dt) => {
    setLoading(true);

    try {
      const [resA, resB] = await Promise.all([await handleUpdateTitle.mutateAsync(dt.title), await handleUpdateAbout.mutateAsync(dt.data)]);

      // TODO: Nanti perbaiki error handle nya
      if (!resA || !resB) {
        return;
      }

      await queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
      await queryClient.invalidateQueries({ queryKey: ["GETAbout"] });
      props.setOpenForm(false);
      reset();
    } finally {
      setLoading(false);
    }
  };

  const INPUT_FIELDS_DATA = [
    { errorMessage: errors.title?.title?.message, id: "1", label: "Title", name: "title.title", tag: "input", type: "text" },
    { errorMessage: errors.title?.titleRed?.message, id: "2", label: "Title Red", name: "title.titleRed", tag: "input", type: "text" },
    { errorMessage: errors.data?.subTitle?.message, id: "3", label: "Sub Title", name: "data.subTitle", tag: "input", type: "text" },
    { errorMessage: errors.data?.description?.message, id: "4", label: "Description", name: "data.description", tag: "textarea" },
    { errorMessage: errors.data?.note?.message, id: "5", label: "Note", name: "data.note", tag: "input", type: "text" },
    { errorMessage: errors.data?.logoURL?.message, id: "6", label: "Logo URL", name: "data.logoURL", tag: "input", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className="max-w-[500px]">
        <Title title="UPDATE " titleRed="ABOUT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {INPUT_FIELDS_DATA.map((dt) =>
            dt.tag === "input" ? (
              <Input
                color="black"
                disabled={loading}
                errorMessage={dt.errorMessage}
                key={dt.id}
                label={dt.label}
                type={dt.type}
                {...register(dt.name as keyof TAboutSchema)}
              />
            ) : (
              <TextArea
                color="black"
                disabled={loading}
                errorMessage={dt.errorMessage}
                key={dt.id}
                label={dt.label}
                {...register(dt.name as keyof TAboutSchema)}
              />
            ),
          )}

          <FormSubmitButton
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

export default AboutForm;
