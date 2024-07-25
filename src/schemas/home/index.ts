import { z } from "zod";

/* eslint-disable perfectionist/sort-objects */
const errorMessage = {
  string: {
    min: (object: string, min: number) => `Please enter ${object} minimum ${min} characters`,
    max: (object: string, max: number) => `${object} maximum ${max} characters`,
    required: (object: string) => `Please enter ${object}`,
  },
  number: {
    min: (object: string, min: number) => `${object} minimum ${min}`,
    max: (object: string, max: number) => `${object} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */

// -----------------------------------------------------------------------------

const TitleSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(2, { message: errorMessage.string.min("Title", 2) })
    .max(20, { message: errorMessage.string.max("Title", 20) }),
  titleRed: z
    .string()
    .min(2, { message: errorMessage.string.min("Title Red", 2) })
    .max(20, { message: errorMessage.string.max("Title Red", 20) }),
});

// -----------------------------------------------------------------------------

export const AboutSchema = z.object({
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
  title: TitleSchema,
});

export type TAboutSchema = z.infer<typeof AboutSchema>;

// -----------------------------------------------------------------------------

export const HighlightSchema = z.object({
  data: z.object({
    copyright: z
      .string()
      .min(16, { message: errorMessage.string.min("Copyright", 16) })
      .max(48, { message: errorMessage.string.max("Copyright", 48) }),
    id: z.string(),
    images: z.array(
      z.object({
        highlightId: z.string(),
        id: z.string(),
        imgURL: z.string().min(1, { message: errorMessage.string.required("Image URL") }),
        thumbnailURL: z.string().min(1, { message: errorMessage.string.required("Thumbnail URL") }),
      }),
    ),
  }),
  title: TitleSchema,
});

export type THighlightSchema = z.infer<typeof HighlightSchema>;

// -----------------------------------------------------------------------------

export const PricingSchema = z.object({
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
  title: TitleSchema,
});

export type TPricingSchema = z.infer<typeof PricingSchema>;

// -----------------------------------------------------------------------------

export const TestimonySchema = z.object({
  counting: z.array(
    z.object({
      count: z.number(),
      id: z.string(),
      title: z.string(),
    }),
  ),
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

export type TTestimonySchema = z.infer<typeof TestimonySchema>;
