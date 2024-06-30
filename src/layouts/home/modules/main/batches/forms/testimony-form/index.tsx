"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/interfaces/buttons/button";
import { Input } from "@/interfaces/inputs/input";
import { TextArea } from "@/interfaces/inputs/text-area";
import { ContainerModal, ContentModal } from "@/interfaces/modal";
import { Title } from "@/interfaces/title";
import { ITestimony, PUTTestimony } from "@/utils";

import { Schema, TSchema } from "./Schema";

type T = {
  data: ITestimony[] | undefined;
  setOpenForm: (value: boolean) => void;
};

const TestimonyForm: FC<T> = ({ data, setOpenForm }): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TSchema>({
    defaultValues: { data: data },
    resolver: zodResolver(Schema),
  });

  const { append, fields, remove } = useFieldArray({ control, name: "data" });

  const handleUpdate = useMutation({
    mutationFn: PUTTestimony,
    onError: () => setLoading(false),
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETTestimony"] });
      setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TSchema> = async (data) => {
    handleUpdate.mutate(data.data);
  };

  return (
    <ContainerModal>
      <ContentModal className="max-w-[500px] sm:max-w-[1000px]">
        <Title title="UPDATE " titleRed="TESTIMONY" />
        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="grid grid-cols-2 gap-3 font-semibold">
            <Button
              color="red"
              onClick={() => fields.length < 8 && append({ comment: "", event: "", id: "", imageURL: "", name: "" })}
              size="sm"
              type="button"
              variant="outline"
            >
              Add
            </Button>
            <Button color="red" onClick={() => remove(fields.length - 1)} size="sm" type="button" variant="outline">
              Remove
            </Button>
          </div> */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {fields?.map((dt, index) => (
              <div key={dt.id}>
                <Input
                  color="black"
                  errorMessage={errors.data?.[index]?.imageURL?.message}
                  label={`Image URL ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.imageURL`)}
                />
                <Input
                  color="black"
                  errorMessage={errors.data?.[index]?.name?.message}
                  label={`Name ${index + 1}`}
                  type="text"
                  {...register(`data.${index}.name`)}
                />
                <Input
                  color="black"
                  errorMessage={errors.data?.[index]?.event?.message}
                  label={`Event ${index + 1}`}
                  {...register(`data.${index}.event`)}
                  type="text"
                />
                <TextArea
                  color="black"
                  errorMessage={errors.data?.[index]?.comment?.message}
                  label={`Comment ${index + 1}`}
                  {...register(`data.${index}.comment`)}
                />
              </div>
            ))}
          </div>
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

export default TestimonyForm;
