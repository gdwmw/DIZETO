import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { FaList, FaWhatsapp } from "react-icons/fa";

import { FloatingButton } from "@/src/components/booking-button";
import { getAllSession } from "@/src/hooks/session";
import { GETAbout, GETClient, GETContact, GETCounting, GETHighlight, GETPricing, GETTestimony, GETTitle } from "@/src/utils/api";

import { About, Client, Contact, Hero, Highlight, Pricing, Testimony } from "./batches";

export const Main: FC = async (): Promise<ReactElement> => {
  const queryClient = new QueryClient();

  const session = await getAllSession();

  await Promise.all([
    queryClient.prefetchQuery({
      queryFn: GETTitle,
      queryKey: ["GETTitle"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETAbout,
      queryKey: ["GETAbout"],
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
      queryFn: GETCounting,
      queryKey: ["GETCounting"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETClient,
      queryKey: ["GETClient"],
    }),
    queryClient.prefetchQuery({
      queryFn: GETContact,
      queryKey: ["GETContact"],
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
          <Client />
          <Contact />
        </div>
        <FloatingButton className={session?.user?.status ? "bottom-[70px] sm:bottom-[110px]" : ""} href="https://www.whatsapp.com/" target="_blank">
          <FaWhatsapp size={30} />
        </FloatingButton>
        {session?.user?.status ? (
          session?.user?.role === "user" ? (
            <FloatingButton href={`/booking/history/${session?.user?.id}`}>
              <FaList size={23} />
            </FloatingButton>
          ) : (
            <FloatingButton href="/dashboard">
              <FaList size={23} />
            </FloatingButton>
          )
        ) : null}
      </main>
    </HydrationBoundary>
  );
};
