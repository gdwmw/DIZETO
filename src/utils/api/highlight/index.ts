import type { IHighlightResponse } from "@/src/types";

import { getApi } from "../base";

const label = "Highlight";

export const GETHighlight = async (query?: string): Promise<IHighlightResponse[]> => {
  const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : undefined;
  const response = await getApi<{ data: IHighlightResponse[] }>({
    cache: "force-cache",
    endpoint: "/api/highlights",
    label: label,
    params: params,
  });
  return response.data;
};

export const GETHighlightByDocumentId = async (documentId: string): Promise<IHighlightResponse> => {
  const response = await getApi<{ data: IHighlightResponse }>({
    cache: "force-cache",
    endpoint: `/api/highlights/${documentId}`,
    label: label,
  });
  return response.data;
};
