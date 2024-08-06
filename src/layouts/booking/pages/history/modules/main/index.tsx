"use client";

import { FC, ReactElement, useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

import { Button } from "@/src/components/interfaces/button";
import { Input } from "@/src/components/interfaces/inputs";
import { ContentModal } from "@/src/components/interfaces/modal";
import { Title } from "@/src/components/interfaces/title";
import { GETAuthById, PUTBooking } from "@/src/utils/api";

interface I {
  id: string;
}

export const Main: FC<I> = (props): ReactElement => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: () => GETAuthById(props.id),
    queryKey: ["GETAuthById", props.id],
  });

  const [selectedId, setSelectedId] = useState(NaN);
  const [loading, setLoading] = useState(false);

  const handleUpdateStatus = useMutation({
    mutationFn: PUTBooking,
    onMutate: () => setLoading(true),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETAuthById", props.id] });
      setLoading(false);
    },
  });

  const capitalizeWords = (str: string) => str.replace(/\b\w/g, (char) => char.toUpperCase());

  const allSelectedData = data?.booking?.[selectedId];
  const status = data?.booking?.[selectedId]?.status;
  const resultURL = data?.booking?.[selectedId]?.resultURL ?? "";

  return (
    <main>
      <section className="flex h-screen items-center justify-center px-5 dark:text-white">
        <ContentModal className="max-w-[700px]">
          <Title title="HISTO" titleRed="RY" />

          <div className="flex flex-col gap-5 pt-5 min-[560px]:flex-row min-[560px]:gap-0">
            <div className="w-full space-y-5 min-[560px]:order-2 min-[560px]:pl-5">
              {
                <Input
                  className={resultURL && "!cursor-text"}
                  disabled
                  icon={
                    resultURL ? (
                      <Link className="cursor-pointer hover:text-red-600" href={resultURL} target="_blank">
                        <MdOpenInNew />
                      </Link>
                    ) : (
                      <MdOpenInNew />
                    )
                  }
                  iconClassName={resultURL && "cursor-text"}
                  label="Result URL"
                  value={resultURL}
                />
              }
              <div className="space-y-2">
                <Button
                  className="w-full"
                  color="red"
                  disabled={
                    (status !== "preview" && status !== "complete" && status !== "revision") ||
                    status === "complete" ||
                    status === "revision" ||
                    loading
                  }
                  onClick={() =>
                    handleUpdateStatus.mutate({
                      ...allSelectedData!,
                      status: "revision",
                    })
                  }
                  size="sm"
                  variant="outline"
                >
                  {loading ? "Loading..." : "Request Revision"}
                </Button>
                <span className="block text-center text-xs">Or</span>
                <Button
                  className="w-full"
                  color="red"
                  disabled={(status !== "preview" && status !== "complete" && status !== "revision") || status === "complete" || loading}
                  onClick={() =>
                    handleUpdateStatus.mutate({
                      ...allSelectedData!,
                      status: "complete",
                    })
                  }
                  size="sm"
                  variant="outline"
                >
                  {loading ? "Loading..." : "Complete"}
                </Button>
              </div>
            </div>

            <div className="flex w-full min-w-[250px] flex-col space-y-3 border-black min-[560px]:order-1 min-[560px]:w-fit min-[560px]:max-w-[280px] min-[560px]:border-r-2 min-[560px]:pr-5 dark:border-white">
              {data?.booking?.map(
                (dt, index) =>
                  dt.status !== "complete" && (
                    <button
                      className={`rounded-lg border border-black p-3 hover:bg-red-600 hover:text-white dark:border-white ${selectedId + 1 == parseInt(dt.id!) ? "bg-red-600" : ""}`}
                      key={dt.id}
                      onClick={() => setSelectedId(index)}
                      type="button"
                    >
                      <span className="block">{dt.category}</span>
                      <span className="block">Package {dt.package}</span>
                      <span className="block">Status: {capitalizeWords(dt.status)}</span>
                    </button>
                  ),
              )}
              {data?.booking?.some((s) => s.status !== "complete") && data?.booking?.some((s) => s.status === "complete") && (
                <div className="h-[2px] w-full bg-black dark:bg-white" />
              )}
              {data?.booking?.map(
                (dt, index) =>
                  dt.status === "complete" && (
                    <button
                      className={`rounded-lg border border-black p-3 hover:bg-red-600 hover:text-white dark:border-white ${selectedId + 1 == parseInt(dt.id!) ? "bg-red-600" : ""}`}
                      key={dt.id}
                      onClick={() => setSelectedId(index)}
                      type="button"
                    >
                      <span className="block">{dt.category}</span>
                      <span className="block">Package {dt.package}</span>
                      <span className="block">Status: {capitalizeWords(dt.status)}</span>
                    </button>
                  ),
              )}
            </div>
          </div>
        </ContentModal>
      </section>
    </main>
  );
};
