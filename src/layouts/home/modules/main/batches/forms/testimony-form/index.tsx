"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import FormActionButton from "@/src/components/form-action-button";
import { Button } from "@/src/components/interfaces/buttons/button";
import { Input } from "@/src/components/interfaces/inputs/input";
import { TextArea } from "@/src/components/interfaces/inputs/text-area";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { TestimonySchema, TTestimonySchema } from "@/src/schemas/home";
import { ITestimony } from "@/src/types/api";
import { DELETETestimony, POSTTestimony, PUTTestimony } from "@/src/utils/api";

type T = {
  data: ITestimony[] | undefined;
  setOpenForm: (value: boolean) => void;
};

const TestimonyForm: FC<T> = (props): ReactElement => {
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
  } = useForm<TTestimonySchema>({
    defaultValues: { data: props.data },
    resolver: zodResolver(TestimonySchema),
  });

  const { append, fields, remove } = useFieldArray({ control, name: "data" });

  const handleAppend = () => {
    fields.length < 8 && append({ comment: "", event: "", id: "", imageURL: "", name: "" });
  };

  const handleRemove = () => {
    if (fields.length > 0) {
      !idsToDelete.includes(fields.length.toString()) &&
        fields.length <= dataLengthKeeper &&
        setIdsToDelete((prev) => [...prev, fields.length.toString()]);
      remove(fields.length - 1);
    }
  };

  // TODO: Nanti perbaiki error handle nya
  const handleDeleteTestimony = useMutation({
    mutationFn: DELETETestimony,
    onError: () => setLoading(false),
    onSuccess: () => {
      setIdsToDelete([]);
    },
  });

  const handleCreateTestimony = useMutation({
    mutationFn: POSTTestimony,
    onError: () => setLoading(false),
  });

  const handleUpdateTestimony = useMutation({
    mutationFn: PUTTestimony,
    onError: () => setLoading(false),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETTestimony"] });
    },
  });

  const onSubmit: SubmitHandler<TTestimonySchema> = async (data) => {
    setLoading(true);
    if (idsToDelete.length > 0) {
      await handleDeleteTestimony.mutateAsync(idsToDelete);
    }
    const hasEmptyId = data.data.some((dt) => !dt.id);
    if (hasEmptyId) {
      await handleCreateTestimony.mutateAsync(data.data);
    }
    await handleUpdateTestimony.mutateAsync(data.data);
    props.setOpenForm(false);
    setLoading(false);
    reset();
  };

  return (
    <ContainerModal>
      <ContentModal className="max-w-[500px] sm:max-w-[1000px]">
        <Title title="UPDATE " titleRed="TESTIMONY" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-3 font-semibold">
            <Button color="red" disabled={loading} onClick={handleAppend} size="sm" type="button" variant="outline">
              Add
            </Button>
            <Button color="red" disabled={loading} onClick={handleRemove} size="sm" type="button" variant="outline">
              Remove
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {fields?.map((dt, index) => (
              <div key={dt.id ?? index + 1}>
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.imageURL?.message}
                  label={`Image URL ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.imageURL`)}
                />
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.name?.message}
                  label={`Name ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.name`)}
                />
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.event?.message}
                  label={`Event ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.event`)}
                />
                <TextArea
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.[index]?.comment?.message}
                  label={`Comment ${index + 1}`}
                  {...register(`data.${index}.comment`)}
                />
              </div>
            ))}
          </div>

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

export default TestimonyForm;
