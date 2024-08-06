import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GETAuthById } from "@/src/utils/api";

import { Main } from "./modules";

interface I {
  id: string;
}

const HistoryLayout: FC<I> = async (props): Promise<ReactElement> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => GETAuthById(props.id),
    queryKey: ["GETAuthById", props.id],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main id={props.id} />
    </HydrationBoundary>
  );
};

export default HistoryLayout;
