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

interface I {
  data: IContact[] | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
}

const ContactForm: FC<I> = (props): ReactElement => {
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
    onError: (error) => {
      console.error("Error updating title:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
    },
  });

  const handleUpdateContact = useMutation({
    mutationFn: PUTContact,
    onError: (error) => {
      console.error("Error updating contact:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GETContact"] });
    },
  });

  const onSubmit: SubmitHandler<TContactSchema> = async (dt) => {
    setLoading(true);

    try {
      const [resA, resB] = await Promise.all([await handleUpdateTitle.mutateAsync(dt.title), await handleUpdateContact.mutateAsync(dt.data)]);

      if (!resA || !resB) {
        console.error("Failed to update title or contact");
        return;
      }

      props.setOpenForm(false);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const INPUT_FIELDS_DATA = [
    { errorMessage: errors.title?.title?.message, id: "1", label: "Title", name: "title.title", type: "text" },
    { errorMessage: errors.title?.titleRed?.message, id: "2", label: "Title Red", name: "title.titleRed", type: "text" },
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
              {...register(dt.name as keyof TContactSchema)}
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
