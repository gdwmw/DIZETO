"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FormSubmitButton } from "@/src/components/form-buttons";
import { Input } from "@/src/components/interfaces/inputs";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { HighlightSchema, THighlightSchema } from "@/src/schemas/home";
import { IHighlight, ITitle } from "@/src/types/api";
import { PUTHighlight, PUTImages, PUTTitle } from "@/src/utils/api";

interface I {
  data: IHighlight | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
}

const HighlightForm: FC<I> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<THighlightSchema>({
    defaultValues: { data: props.data, title: props.title },
    resolver: zodResolver(HighlightSchema),
  });

  const handleUpdateTitle = useMutation({
    mutationFn: PUTTitle,
  });

  const handleUpdateHighlight = useMutation({
    mutationFn: PUTHighlight,
  });

  const handleUpdateimages = useMutation({
    mutationFn: PUTImages,
  });

  const onSubmit: SubmitHandler<THighlightSchema> = async (dt) => {
    setLoading(true);

    try {
      const [resA, resB, resC] = await Promise.all([
        await handleUpdateTitle.mutateAsync(dt.title),
        await handleUpdateHighlight.mutateAsync(dt.data),
        await handleUpdateimages.mutateAsync(dt.data.images),
      ]);

      // TODO: Nanti perbaiki error handle nya
      if (!resA || !resB || !resC) {
        return;
      }

      await queryClient.invalidateQueries({ queryKey: ["GETTitle"] });
      await queryClient.invalidateQueries({ queryKey: ["GETHighlight"] });
      props.setOpenForm(false);
      reset();
    } finally {
      setLoading(false);
    }
  };

  const INPUT_FIELDS_DATA = [
    { errorMessage: errors.title?.title?.message, id: "1", label: "Title", name: "title.title", type: "text" },
    { errorMessage: errors.title?.titleRed?.message, id: "2", label: "Title Red", name: "title.titleRed", type: "text" },
    { errorMessage: errors.data?.copyright?.message, id: "3", label: "Copyright", name: "data.copyright", type: "text" },
  ];

  return (
    <ContainerModal>
      <ContentModal className="max-w-[1000px]">
        <Title title="UPDATE " titleRed="HIGHLIGHT" />

        <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
          {INPUT_FIELDS_DATA.map((dt) => (
            <Input
              color="black"
              disabled={loading}
              errorMessage={dt.errorMessage}
              key={dt.id}
              label={dt.label}
              type={dt.type}
              {...register(dt.name as keyof THighlightSchema)}
            />
          ))}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {props.data?.images.map((dt, index) => (
              <div key={dt.id}>
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.images?.[index]?.message}
                  label={`Thumbnail URL ${index + 1}`}
                  type="text"
                  {...register(`data.images.${index}.thumbnailURL`)}
                />
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={errors.data?.images?.[index]?.message}
                  label={`Image URL ${index + 1}`}
                  type="text"
                  {...register(`data.images.${index}.imgURL`)}
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

export default HighlightForm;
