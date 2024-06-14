import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { Copyright } from "@/components/copyright";
import { GETAbout, GETClient, GETContact, GETCounting, GETHighlight, GETPricing, GETTestimony, GETTitle } from "@/utils/api";

import { About, Contact, HightlightPortfolio, Jumbotron, Pricing, TestimonialsClients } from "./batches";

export const Main: FC = async (): Promise<ReactElement> => {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryFn: GETAbout,
      queryKey: ["GETAbout"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETClient,
      queryKey: ["GETClient"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETContact,
      queryKey: ["GETContact"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETCounting,
      queryKey: ["GETCounting"],
    }),
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
      queryFn: GETTitle,
      queryKey: ["GETTitle"],
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Jumbotron />
        <section className="container mx-auto space-y-10 px-5">
          <About />
          <HightlightPortfolio />
          <Pricing />
          <TestimonialsClients />
          <Contact />
          <Copyright />
        </section>
      </main>
    </HydrationBoundary>
  );
};
