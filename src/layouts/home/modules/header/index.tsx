import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GETTheme } from "@/utils";

import { Navbar } from "./batches";

export const Header: FC = async (): Promise<ReactElement> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryFn: GETTheme,
    queryKey: ["GETTheme"],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <header>
        <Navbar />
      </header>
    </HydrationBoundary>
  );
};
