import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GETHighlight } from "@/utils";

import { About, Hero, Highlight } from "./batches";

export const Main: FC = async (): Promise<ReactElement> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryFn: GETHighlight,
    queryKey: ["GETHighlight"],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="container mx-auto px-5">
        <Hero />
        <div className="space-y-10">
          <About />
          <Highlight />
        </div>
      </main>
    </HydrationBoundary>
  );
};
