"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormActionButton, FormSubmitButton } from "@/src/components/form-buttons";
import { Input, TextArea } from "@/src/components/interfaces/inputs";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { TestimonySchema, TTestimonySchema } from "@/src/schemas/home";
import { ICounting, ITestimony } from "@/src/types/api";
import { DELETETestimony, POSTTestimony, PUTCounting, PUTTestimony } from "@/src/utils/api";

interface I {
  counting: ICounting[] | undefined;
  data: ITestimony[] | undefined;
  isEditTestimony: boolean;
  setIsEditTestimony: (value: boolean) => void;
  setOpenForm: (value: boolean) => void;
}

const TestimonyForm: FC<I> = (props): ReactElement => {
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
    defaultValues: { counting: props.counting, data: props.data },
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

  const handleDeleteTestimony = useMutation({
    mutationFn: DELETETestimony,
  });

  const handleCreateTestimony = useMutation({
    mutationFn: POSTTestimony,
  });

  const handleUpdateTestimony = useMutation({
    mutationFn: PUTTestimony,
  });

  const handleUpdateCounting = useMutation({
    mutationFn: PUTCounting,
    onSettled: () => setLoading(false),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETCounting"] });
      props.setOpenForm(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TTestimonySchema> = async (dt) => {
    setLoading(true);

    if (props.isEditTestimony) {
      try {
        const hasEmptyId = dt.data.some((dt) => !dt.id);

        const [resA, resB, resC] = await Promise.all([
          idsToDelete.length > 0 && (await handleDeleteTestimony.mutateAsync(idsToDelete)),
          hasEmptyId && (await handleCreateTestimony.mutateAsync(dt.data)),
          await handleUpdateTestimony.mutateAsync(dt.data),
        ]);

        // TODO: Nanti perbaiki error handle nya
        if ((idsToDelete.length > 0 && !resA) || (hasEmptyId && !resB)) {
          return;
        }

        if (!resC) {
          return;
        }

        await queryClient.invalidateQueries({ queryKey: ["GETTestimony"] });
        props.setOpenForm(false);
        props.setIsEditTestimony(false);
        setIdsToDelete([]);
        reset();
      } finally {
        setLoading(false);
      }
    } else {
      handleUpdateCounting.mutate(dt.counting);
    }
  };

  return (
    <ContainerModal>
      <ContentModal className={`${props.isEditTestimony ? "max-w-[1000px]" : "max-w-[500px]"}`}>
        <Title title="UPDATE " titleRed={props.isEditTestimony ? "TESTIMONY" : "COUNTING"} />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {props.isEditTestimony && (
            <>
              <FormActionButton handleAppend={handleAppend} handleRemove={handleRemove} loading={loading} />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
            </>
          )}

          {!props.isEditTestimony && (
            <>
              {props.counting?.map((dt, index) => (
                <div key={dt.id}>
                  <Input
                    color="black"
                    disabled={loading}
                    errorMessage={errors.counting?.[index]?.title?.message}
                    label={`Title ${index + 1}`}
                    type="text"
                    {...register(`counting.${index}.title`)}
                  />
                  <Input
                    color="black"
                    disabled={loading}
                    errorMessage={errors.counting?.[index]?.count?.message}
                    label={`Count ${index + 1}`}
                    type="number"
                    {...register(`counting.${index}.count`, { valueAsNumber: true })}
                  />
                </div>
              ))}
            </>
          )}

          <FormSubmitButton
            loading={loading}
            onClick={() => {
              props.setOpenForm(false);
              props.setIsEditTestimony(false);
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

export default TestimonyForm;
