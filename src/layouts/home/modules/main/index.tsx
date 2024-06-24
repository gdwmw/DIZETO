import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GETCounting, GETHighlight, GETPricing, GETTestimony } from "@/utils";

import { About, Hero, Highlight, Pricing, Testimony } from "./batches";

export const Main: FC = async (): Promise<ReactElement> => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryFn: GETHighlight,
      queryKey: ["GETHighlight"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETPricing,
      queryKey: ["GETPricing"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETTestimony,
      queryKey: ["GETTestimony"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETCounting,
      queryKey: ["GETCounting"],
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="container mx-auto px-5">
        <Hero />
        <div className="space-y-10">
          <About />
          <Highlight />
          <Pricing />
          <Testimony />
        </div>
      </main>
    </HydrationBoundary>
  );
};
