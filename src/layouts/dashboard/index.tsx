import { FC, ReactElement } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { GETAuth } from "@/src/utils/api";

import { Main } from "./modules";

const DashboardLayout: FC = async (): Promise<ReactElement> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryFn: () => GETAuth(),
    queryKey: ["GETAuth"],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
    </HydrationBoundary>
  );
};

export default DashboardLayout;
