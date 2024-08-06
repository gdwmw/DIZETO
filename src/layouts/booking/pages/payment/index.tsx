import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GETBookingById } from "@/src/utils/api";

import { Main } from "./modules";

interface I {
  slug: string[];
}

const PaymentLayout: FC<I> = async (props): Promise<ReactElement> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => GETBookingById({ authId: props.slug[0], id: props.slug[1] }),
    queryKey: ["GETBookingById", props.slug[0], props.slug[1]],
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main authId={props.slug[0]} id={props.slug[1]} />
    </HydrationBoundary>
  );
};

export default PaymentLayout;
