import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/interfaces/buttons/button";
import { Input } from "@/interfaces/inputs/input";
import { TextArea } from "@/interfaces/inputs/text-area";
import { ContainerModal, ContentModal } from "@/interfaces/modal";
import { Title } from "@/interfaces/title";
import { IAbout, ITitle, PUTAbout, PUTTitle } from "@/utils";

import { Schema, TSchema } from "./Schema";

type T = {
  data: IAbout | undefined;
  setOpenForm: (value: boolean) => void;
  title: ITitle | undefined;
};

const AboutForm: FC<T> = ({ data, setOpenForm, title }): ReactElement => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TSchema>({
    defaultValues: { data: { ...data }, title: { ...title } },
    resolver: zodResolver(Schema),
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
      setOpenForm(false);
      setLoading(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TSchema> = async (data) => {
    handleUpdateTitle.mutate(data.title);
    handleUpdate.mutate(data.data);
  };

  return (
    <ContainerModal>
      <ContentModal className="max-w-[500px]">
        <Title title="UPDATE " titleRed="ABOUT" />
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Input color="black" errorMessage={errors.title?.title?.message} label="Title" {...register("title.title")} />
          <Input color="black" errorMessage={errors.title?.titleRed?.message} label="Title Red" {...register("title.titleRed")} />
          <Input color="black" errorMessage={errors.data?.subTitle?.message} label="Sub Title" {...register("data.subTitle")} />
          <TextArea color="black" errorMessage={errors.data?.description?.message} label="Description" {...register("data.description")} />
          <Input color="black" errorMessage={errors.data?.note?.message} label="Note" {...register("data.note")} />
          <Input color="black" errorMessage={errors.data?.logoURL?.message} label="Logo URL" {...register("data.logoURL")} />
          <div className="flex items-center gap-2 font-semibold">
            <Button className="w-full" color="red" disabled={loading} size="sm" type="submit" variant="outline">
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

export default AboutForm;
