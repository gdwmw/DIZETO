import { z } from "zod";

import { errorMessage } from "../error-message";

export const Schema = z.object({
  data: z.object({
    description: z
      .string()
      .min(100, { message: errorMessage.string.min("Description", 100) })
      .max(1000, { message: errorMessage.string.max("Description", 1000) }),
    id: z.string(),
    logoURL: z.string().min(1, { message: errorMessage.string.required("Logo URL") }),
    note: z
      .string()
      .min(20, { message: errorMessage.string.min("Note", 20) })
      .max(100, { message: errorMessage.string.max("Note", 100) }),
    subTitle: z
      .string()
      .min(8, { message: errorMessage.string.min("Sub Title", 8) })
      .max(32, { message: errorMessage.string.max("Sub Title", 32) }),
  }),
  title: z.object({
    id: z.string(),
    title: z
      .string()
      .min(2, { message: errorMessage.string.min("Title", 2) })
      .max(20, { message: errorMessage.string.max("Title", 20) }),
    titleRed: z
      .string()
      .min(2, { message: errorMessage.string.min("Title Red", 2) })
      .max(20, { message: errorMessage.string.max("Title Red", 20) }),
  }),
});

export type TSchema = z.infer<typeof Schema>;
