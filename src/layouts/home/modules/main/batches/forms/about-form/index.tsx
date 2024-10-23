"use client";

import { Dispatch, FC, ReactElement, SetStateAction, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Image from "next/image";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

import { FormSubmitButton } from "@/src/components/form-buttons";
import { Input, TextArea } from "@/src/components/interfaces/inputs";
import { ContainerModal, ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { AboutSchema, TAboutSchema } from "@/src/schemas/home";
import { IAbout } from "@/src/types/api";
import { PUTAbout } from "@/src/utils/api";
const SelectImage = dynamic(() => import("@/src/components/select-image"));

interface I {
  data: IAbout | undefined;
  setOpenForm: Dispatch<SetStateAction<boolean>>;
}

const AboutForm: FC<I> = (props): ReactElement => {
  const queryClient = useQueryClient();
  const [openSelectImage, setOpenSelectImage] = useState(false);
  const [loading, setLoading] = useState(false); // TODO: Nanti perbaiki state yang memberi tipe secara exlusive seperti ini useState<boolean>(false)

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    resetField,
    setValue,
    watch,
  } = useForm<TAboutSchema>({
    defaultValues: { data: props.data },
    resolver: zodResolver(AboutSchema),
  });

  const getImageURL = (fileList: FileList | undefined): string | undefined => {
    if (fileList && typeof fileList !== "string" && fileList.length > 0) {
      return URL.createObjectURL(fileList[0]);
    }
  };

  useEffect(() => {
    if (watch("data.image.file")?.length) {
      setValue("data.image.id", 0);
    }
  }, [watch("data.image.file")]);

  useEffect(() => {
    if (watch("data.image.id") !== 0) {
      resetField("data.image.file");
    }
  }, [watch("data.image.id")]);

  const handleUpdate = useMutation({
    mutationFn: PUTAbout,
    onError: () => {
      console.log("Failed to update about!");
    },
    onMutate: () => {
      setLoading(true);
    },
    onSettled: () => {
      setLoading(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GETAbout"] });
      props.setOpenForm(false);
      reset();
    },
  });

  const onSubmit: SubmitHandler<TAboutSchema> = (dt) => {
    handleUpdate.mutate(dt.data);
  };

  const INPUT_FIELDS_DATA = [
    {
      id: "1",
      section: [
        { containerClassName: "w-full", errorMessage: errors.data?.title?.message, id: "1", label: "Title", name: "data.title", type: "text" },
        {
          containerClassName: "w-full max-w-[200px]",
          errorMessage: errors.data?.redColor?.message,
          id: "2",
          label: "Red Color",
          name: "data.redColor",
          type: "number",
        },
      ],
    },
    {
      id: "2",
      section: [
        {
          containerClassName: "w-full",
          errorMessage: errors.data?.subTitle?.message,
          id: "1",
          label: "Sub Title",
          name: "data.subTitle",
          type: "text",
        },
        {
          containerClassName: "w-full max-w-[200px]",
          errorMessage: errors.data?.redColorSub?.message,
          id: "2",
          label: "Red Color",
          name: "data.redColorSub",
          type: "number",
        },
      ],
    },
    { errorMessage: errors.data?.description?.message, id: "3", label: "Description", name: "data.description", tag: "textarea" },
    {
      containerClassName: "w-full max-w-[200px]",
      errorMessage: errors.data?.redColorDesc?.message,
      id: "4",
      label: "Red Color",
      name: "data.redColorDesc",
      type: "number",
    },
    { errorMessage: errors.data?.note?.message, id: "5", label: "Note", name: "data.note", type: "text" },
  ];

  return (
    <ContainerModal>
      {!openSelectImage && (
        <ContentModal className="max-w-[1000px]">
          <Title redColor={7} title="UPDATE ABOUT" />

          <form className="space-y-3 pt-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
              <div className="space-y-3">
                {INPUT_FIELDS_DATA.map((dt) =>
                  dt.section ? (
                    <div className="flex gap-3" key={dt.id}>
                      {dt.section.map((st) => (
                        <Input
                          color="black"
                          containerClassName={st.containerClassName}
                          disabled={loading}
                          errorMessage={st.errorMessage}
                          key={st.id}
                          label={st.label}
                          type={st.type}
                          {...register(st.name as keyof TAboutSchema, {
                            valueAsNumber: st.type === "number",
                          })}
                        />
                      ))}
                    </div>
                  ) : !dt.tag ? (
                    <Input
                      color="black"
                      containerClassName={dt.containerClassName}
                      disabled={loading}
                      errorMessage={dt.errorMessage}
                      key={dt.id}
                      label={dt.label}
                      type={dt.type}
                      {...register(dt.name as keyof TAboutSchema, {
                        valueAsNumber: dt.type === "number",
                      })}
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
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <Input
                    accept="image/*"
                    color="black"
                    disabled={loading}
                    errorMessage={errors.data?.image?.file?.message}
                    label="Upload Image"
                    type="file"
                    {...register("data.image.file")}
                  />

                  <Input
                    className={`h-[30px] ${watch("data.image.file")?.length && "text-transparent"}`}
                    color="black"
                    containerClassName="w-full max-w-[200px]"
                    disabled={loading}
                    errorMessage={errors.data?.image?.id?.message}
                    icon={<MdOutlinePhotoSizeSelectActual size={20} />}
                    iconOnClick={() => setOpenSelectImage(true)}
                    label="Select Image"
                    secLabel="ID"
                    type="number"
                    {...register("data.image.id", { valueAsNumber: true })}
                  />
                </div>

                <div className="flex size-full items-center justify-center">
                  <div className="relative size-[300px]">
                    <Image alt="LOGO" className="object-contain" fill src={getImageURL(watch("data.image.file")) ?? watch("data.image.url") ?? ""} />
                  </div>
                </div>
              </div>
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
      )}

      {openSelectImage && <SelectImage setOpenSelectImage={setOpenSelectImage} setValue={setValue} />}
    </ContainerModal>
  );
};

export default AboutForm;
