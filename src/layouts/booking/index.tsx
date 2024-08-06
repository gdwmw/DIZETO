import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GETAuth, GETPricingById } from "@/src/utils/api";

import { Main } from "./modules";

interface I {
  id: string;
}

const BookingLayout: FC<I> = async (props): Promise<ReactElement> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => GETPricingById(props.id),
    queryKey: ["GETPricingById", props.id],
  });

  await Promise.all([
    queryClient.prefetchQuery({
      queryFn: () => GETPricingById(props.id),
      queryKey: ["GETPricingById", props.id],
    }),
    queryClient.prefetchQuery({
      queryFn: GETAuth,
      queryKey: ["GETAuth"],
    }),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main id={props.id} />
    </HydrationBoundary>
  );
};

export default BookingLayout;
