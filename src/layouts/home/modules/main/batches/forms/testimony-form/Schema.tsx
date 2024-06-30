import { z } from "zod";

import { errorMessage } from "../error-message";

export const Schema = z.object({
  data: z.array(
    z.object({
      comment: z
        .string()
        .min(16, { message: errorMessage.string.min("Comment", 16) })
        .max(200, { message: errorMessage.string.max("Comment", 200) }),
      event: z
        .string()
        .min(5, { message: errorMessage.string.min("Event", 5) })
        .max(64, { message: errorMessage.string.max("Event", 64) }),
      id: z.string(),
      imageURL: z.string().min(1, { message: errorMessage.string.required("Image URL") }),
      name: z
        .string()
        .min(3, { message: errorMessage.string.min("Name", 3) })
        .max(64, { message: errorMessage.string.max("Name", 64) }),
    }),
  ),
});

export type TSchema = z.infer<typeof Schema>;
