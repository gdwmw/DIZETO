import type { IPortfolioResponse } from "@/src/types";

import { getApi } from "../base";

const label = "Portfolio";

export const GETPortfolio = async (query?: string): Promise<IPortfolioResponse[]> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  const response = await getApi<{ data: IPortfolioResponse[] }>({
    cache: "force-cache",
    endpoint: "/api/portfolios",
    label: label,
    params: params,
  });
  return response.data;
};

export const GETPortfolioByDocumentId = async (documentId: string, query?: string): Promise<IPortfolioResponse> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  const response = await getApi<{ data: IPortfolioResponse }>({
    cache: "force-cache",
    endpoint: `/api/portfolios/${documentId}`,
    label: label,
    params: params,
  });
  return response.data;
};
