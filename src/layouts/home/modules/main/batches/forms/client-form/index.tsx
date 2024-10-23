"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormActionButton, FormSubmitButton } from "@/src/components/form-buttons";
import { Input, Select } from "@/src/components/interfaces/inputs";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { ClientSchema, TClientSchema } from "@/src/schemas/home";
import { IClient, ITitle } from "@/src/types/api";
import { DELETEClient, POSTClient, PUTClient, PUTTitle } from "@/src/utils/api";

interface I {
  data: IClient[] | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
}

const ClientForm: FC<I> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLengthKeeper, setDataLengthKeeper] = useState<number>(0);
  const [idsToDelete, setIdsToDelete] = useState<string[]>([]);

  useEffect(() => {
    setDataLengthKeeper(props.data?.length ?? 0);
  }, [props.data]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TClientSchema>({
    defaultValues: { data: props.data, title: props.title },
    resolver: zodResolver(ClientSchema),
  });

  const { append, fields, remove } = useFieldArray({ control, name: "data" });

  const handleAppend = () => {
    fields.length < 12 && append({ alt: "", href: "", id: "", logoURL: "", theme: "" });
  };

  const handleRemove = () => {
    if (fields.length > 0) {
      !idsToDelete.includes(fields.length.toString()) &&
        fields.length <= dataLengthKeeper &&
        setIdsToDelete((prev) => [...prev, fields.length.toString()]);
      remove(fields.length - 1);
    }
  };

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
    onError: (error) => {
      console.error("Error updating title:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
    },
  });

  const handleDeleteClient = useMutation({
    mutationFn: DELETEClient,
    onError: (error) => {
      console.error("Error deleting client:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GETClient"] });
    },
  });

  const handleCreateClient = useMutation({
    mutationFn: POSTClient,
    onError: (error) => {
      console.error("Error creating client:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GETClient"] });
    },
  });

  const handleUpdateClient = useMutation({
    mutationFn: PUTClient,
    onError: (error) => {
      console.error("Error updating client:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GETClient"] });
    },
  });

  const onSubmit: SubmitHandler<TClientSchema> = async (dt) => {
    setLoading(true);

    try {
      const hasEmptyId = dt.data.some((dt) => !dt.id);

      const [resA, resB, resC, resD] = await Promise.all([
        await handleUpdateTitle.mutateAsync(dt.title),
        idsToDelete.length > 0 && (await handleDeleteClient.mutateAsync(idsToDelete)),
        hasEmptyId && (await handleCreateClient.mutateAsync(dt.data)),
        await handleUpdateClient.mutateAsync(dt.data),
      ]);

      if (!resA || !resD) {
        console.error("Failed to update title or client");
        return;
      }

      if ((idsToDelete.length > 0 && !resB) || (hasEmptyId && !resC)) {
        console.error("Failed to delete or create client");
        return;
      }

      props.setOpenForm(false);
      setIdsToDelete([]);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const INPUT_FIELDS_DATA = [
    { errorMessage: errors.title?.title?.message, id: "1", label: "Title", name: "title.title", type: "text" },
    // { errorMessage: errors.title?.titleRed?.message, id: "2", label: "Title Red", name: "title.titleRed", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className="max-w-[1000px]">
        <Title redColor={7} title="UPDATE CLIENT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {INPUT_FIELDS_DATA.map((dt) => (
            <Input
              color="black"
              disabled={loading}
              errorMessage={dt.errorMessage}
              key={dt.id}
              label={dt.label}
              type={dt.type}
              {...register(dt.name as keyof TClientSchema)}
            />
          ))}

          <FormActionButton handleAppend={handleAppend} handleRemove={handleRemove} loading={loading} />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {fields.map((dt, index) => (
              <div key={dt.id}>
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.logoURL?.message}
                  label={`Logo URL ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.logoURL`)}
                />
                <Select
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.theme?.message}
                  label={`Theme ${index + 1}`}
                  {...register(`data.${index}.theme`)}
                >
                  <option className="text-black" value="both">
                    Both
                  </option>
                  <option className="text-black" value="light">
                    Light
                  </option>
                  <option className="text-black" value="dark">
                    Dark
                  </option>
                </Select>
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.href?.message}
                  label={`Href ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.href`)}
                />
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.alt?.message}
                  label={`Alt ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.alt`)}
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

export default ClientForm;
