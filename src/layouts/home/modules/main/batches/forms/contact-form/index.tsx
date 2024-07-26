"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormSubmitButton } from "@/src/components/form-buttons";
import { Input } from "@/src/components/interfaces/inputs";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { ContactSchema, TContactSchema } from "@/src/schemas/home";
import { IContact, ITitle } from "@/src/types/api";
import { PUTContact, PUTTitle } from "@/src/utils/api";

type T = {
  data: IContact[] | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
};

const ContactForm: FC<T> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TContactSchema>({
    defaultValues: { data: props.data, title: props.title },
    resolver: zodResolver(ContactSchema),
  });

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
  });

  const handleUpdateContact = useMutation({
    mutationFn: PUTContact,
  });

  const onSubmit: SubmitHandler<TContactSchema> = async (dt) => {
    setLoading(true);

    try {
      const [resA, resB] = await Promise.all([await handleUpdateTitle.mutateAsync(dt.title), await handleUpdateContact.mutateAsync(dt.data)]);

      // TODO: Nanti perbaiki error handle nya
      if (!resA || !resB) {
        setLoading(false);
      }

      await queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
      await queryClient.invalidateQueries({ queryKey: ["GETContact"] });
      props.setOpenForm(false);
      setLoading(false);
      reset();
    } catch (error) {}
  };

  const INPUT_FIELDS_DATA = [
    { errorMessage: errors.title?.title?.message, id: "1", label: "Title", name: "title.title", tag: "input", type: "text" },
    { errorMessage: errors.title?.titleRed?.message, id: "2", label: "Title Red", name: "title.titleRed", tag: "input", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className="max-w-[1000px]">
        <Title title="UPDATE " titleRed="CONTACT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {INPUT_FIELDS_DATA.map((dt) => (
            <Input
              color="black"
              disabled={loading}
              errorMessage={dt.errorMessage}
              key={dt.id}
              label={dt.label}
              type={dt.type}
              {...register(dt.name as any)}
            />
          ))}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {props.data?.map((dt, index) => (
              <div key={dt.id}>
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.label?.message}
                  label={`Label ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.label`)}
                />
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.href?.message}
                  label={`Href ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.href`)}
                />
              </div>
            ))}
          </div>

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

export default ContactForm;
