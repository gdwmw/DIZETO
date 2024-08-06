"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { Button } from "@/src/components/interfaces/button";
import { Input, Select } from "@/src/components/interfaces/inputs";
import { ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { GETAuth, PUTBooking } from "@/src/utils/api";

const FormSchema = z.object({
  resultURL: z.string().url({ message: "Invalid URL" }).optional(),
  status: z.enum(["pending", "on progress", "preview", "revision", "complete"]).optional(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export const Main: FC = (): ReactElement => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data } = useQuery({
    queryFn: GETAuth,
    queryKey: ["GETAuth"],
  });

  const [selectedAuthId, setSelectedAuthId] = useState(NaN);
  const [selectedId, setSelectedId] = useState(NaN);
  const [loading, setLoading] = useState(false);

  const updateBooking = useMutation({
    mutationFn: PUTBooking,
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETAuth"] });
      setLoading(false);
      router.refresh();
    },
  });

  const capitalizeWords = (str: string) => str.replace(/\b\w/g, (char) => char.toUpperCase());

  const getAllSelectedData = data?.[selectedAuthId]?.booking?.[selectedId];
  const resultURL = data?.[selectedAuthId]?.booking?.[selectedId]?.resultURL;
  const status = data?.[selectedAuthId]?.booking?.[selectedId]?.status;

  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<FormSchemaType>({
    defaultValues: {
      resultURL,
      status: "pending",
    },
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    setValue("resultURL", resultURL);
    setValue("status", status as "complete" | "on progress" | "pending" | "preview" | "revision");
  }, [resultURL, status, setValue]);

  const onSubmit: SubmitHandler<FormSchemaType> = (formData) => {
    updateBooking.mutate({
      authId: getAllSelectedData?.authId ?? "",
      category: getAllSelectedData?.category ?? "",
      date: getAllSelectedData?.date ?? "",
      id: getAllSelectedData?.id ?? "",
      package: getAllSelectedData?.package ?? "",
      packageId: getAllSelectedData?.packageId ?? "",
      paymentMethod: getAllSelectedData?.paymentMethod ?? "",
      price: getAllSelectedData?.price ?? 0,
      resultURL: formData?.resultURL ?? "",
      status: formData?.status ?? "",
      time: getAllSelectedData?.time ?? "",
    });
  };

  return (
    <main>
      <section className="flex h-screen items-center justify-center px-5 dark:text-white">
        <ContentModal className="max-w-[700px]">
          <Title title="DASHBOA" titleRed="RD" />

          <div className="flex flex-col gap-5 pt-5 min-[560px]:flex-row min-[560px]:gap-0">
            <form className="w-full space-y-5 min-[560px]:order-2 min-[560px]:pl-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <Input errorMessage={errors.resultURL?.message} label="Result URL" {...register("resultURL")} disabled={loading} />
                <Select errorMessage={errors.status?.message} label="Status" {...register("status")} disabled={loading}>
                  <option className="text-black" value="pending">
                    Pending
                  </option>
                  <option className="text-black" value="on progress">
                    On Progress
                  </option>
                  <option className="text-black" value="preview">
                    Preview
                  </option>
                  <option className="text-black" value="revision">
                    Revision
                  </option>
                  <option className="text-black" value="complete">
                    Complete
                  </option>
                </Select>
              </div>

              <Button className="w-full" color="red" disabled={loading} size="sm" type="submit" variant="outline">
                {loading ? "Loading..." : "Submit"}
              </Button>
            </form>

            <div className="flex w-full min-w-[250px] flex-col space-y-3 border-black min-[560px]:order-1 min-[560px]:w-fit min-[560px]:max-w-[280px] min-[560px]:border-r-2 min-[560px]:pr-5 dark:border-white">
              {data?.map((dt, index) =>
                dt?.booking?.map(
                  (bookingDt, bookingIndex) =>
                    bookingDt.status !== "complete" && (
                      <button
                        className={`rounded-lg border border-black p-3 hover:bg-red-600 hover:text-white dark:border-white ${selectedId + 1 == parseInt(bookingDt.id!) ? "bg-red-600" : ""}`}
                        key={`${dt.id}-${bookingDt.id}`} // Perbaikan kunci unik
                        onClick={() => {
                          setSelectedId(bookingIndex);
                          setSelectedAuthId(index);
                        }}
                        type="button"
                      >
                        <span className="block">Account Name: {dt.name}</span>
                        <span className="block">{bookingDt.category}</span>
                        <span className="block">Package {bookingDt.package}</span>
                        <span className="block">Status: {capitalizeWords(bookingDt.status)}</span>
                      </button>
                    ),
                ),
              )}
              {data?.some((s) => s.booking?.some((s) => s.status !== "complete")) &&
                data?.some((s) => s.booking?.some((s) => s.status === "complete")) && <div className="h-[2px] w-full bg-black dark:bg-white" />}
              {data?.map((dt, index) =>
                dt?.booking?.map(
                  (bookingDt, bookingIndex) =>
                    bookingDt.status === "complete" && (
                      <button
                        className={`rounded-lg border border-black p-3 hover:bg-red-600 hover:text-white dark:border-white ${selectedId + 1 == parseInt(bookingDt.id!) ? "bg-red-600" : ""}`}
                        key={`${dt.id}-${bookingDt.id}`} // Perbaikan kunci unik
                        onClick={() => {
                          setSelectedId(bookingIndex);
                          setSelectedAuthId(index);
                        }}
                        type="button"
                      >
                        <span className="block">Account Name: {dt.name}</span>
                        <span className="block">{bookingDt.category}</span>
                        <span className="block">Package {bookingDt.package}</span>
                        <span className="block">Status: {capitalizeWords(bookingDt.status)}</span>
                      </button>
                    ),
                ),
              )}
            </div>
          </div>
        </ContentModal>
      </section>
    </main>
  );
};
