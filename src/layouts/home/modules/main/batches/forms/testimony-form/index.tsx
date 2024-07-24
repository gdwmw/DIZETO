"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import FormActionButton from "@/src/components/form-action-button";
import { Input } from "@/src/components/interfaces/inputs/input";
import { TextArea } from "@/src/components/interfaces/inputs/text-area";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { TestimonySchema, TTestimonySchema } from "@/src/schemas/home";
import { ITestimony } from "@/src/types/api";
import { PUTTestimony } from "@/src/utils/api";

type T = {
  data: ITestimony[] | undefined;
  setOpenForm: (value: boolean) => void;
};

const TestimonyForm: FC<T> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleUpdate = useMutation({
    mutationFn: PUTTestimony,
    onError: () => setLoading(false),
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETTestimony"] });
      props.setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TTestimonySchema> = async (data) => {
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
              disabled={loading}
              onClick={() => fields.length < 8 && append({ comment: "", event: "", id: "", imageURL: "", name: "" })}
              size="sm"
              type="button"
              variant="outline"
            >
              Add
            </Button>
            <Button color="red" disabled={loading} onClick={() => remove(fields.length - 1)} size="sm" type="button" variant="outline">
              Remove
            </Button>
          </div> */}
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
