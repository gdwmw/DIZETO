import { z } from "zod";

import { errorMessage } from "../error-message";

export const Schema = z.object({
  data: z.object({
    copyright: z
      .string()
      .min(16, { message: errorMessage.string.min("Copyright", 16) })
      .max(48, { message: errorMessage.string.max("Copyright", 48) }),
    id: z.string(),
    imageFile: z.array(
      z.object({
        highlightId: z.string(),
        id: z.string(),
        imgURL: z.string().min(1, { message: errorMessage.string.required("Image URL") }),
        thumbnailURL: z.string().min(1, { message: errorMessage.string.required("Thumbnail URL") }),
      }),
    ),
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
