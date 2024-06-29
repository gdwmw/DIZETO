import { z } from "zod";

import { errorMessage } from "../error-message";

export const Schema = z.object({
  data: z.object({
    category: z
      .string()
      .min(5, { message: errorMessage.string.min("Category", 5) })
      .max(32, { message: errorMessage.string.max("Category", 32) }),
    id: z.string(),
    listItem: z.array(
      z.object({
        id: z.string(),
        list: z.array(
          z.object({
            label: z
              .string()
              .min(1, { message: errorMessage.string.min("Label", 1) })
              .max(100, { message: errorMessage.string.max("Label", 100) }),
            qty: z
              .number()
              .min(1, { message: errorMessage.number.min("Quantity", 1) })
              .max(1000, { message: errorMessage.number.max("Quantity", 1000) }),
          }),
        ),
        pricingId: z.string(),
      }),
    ),
    pack: z
      .string()
      .min(1, { message: errorMessage.string.min("Pack", 1) })
      .max(100, { message: errorMessage.string.max("Pack", 100) }),
    price: z
      .string()
      .min(3, { message: errorMessage.string.min("Price", 3) })
      .max(3, { message: errorMessage.string.max("Price", 3) }),
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
