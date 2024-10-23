import { z } from "zod";

/* eslint-disable perfectionist/sort-objects */
const errorMessage = {
  string: {
    min: (label: string, min: number) => `Please enter ${label} minimum ${min} characters`,
    max: (label: string, max: number) => `${label} maximum ${max} characters`,
    required: (label: string) => `Please enter ${label}`,
  },
  number: {
    min: (label: string, min: number) => `${label} minimum ${min}`,
    max: (label: string, max: number) => `${label} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */

// -----------------------------------------------------------------------------

const TitleSchema = z.object({
  redColor: z
    .number()
    .min(0, { message: errorMessage.number.min("Red Color", 0) })
    .max(100, { message: errorMessage.number.max("Red Color", 100) }),
  title: z
    .string()
    .min(2, { message: errorMessage.string.min("Title", 2) })
    .max(20, { message: errorMessage.string.max("Title", 20) }),
});

// -----------------------------------------------------------------------------

export const AboutSchema = z.object({
  data: z
    .object({
      description: z
        .string()
        .min(100, { message: errorMessage.string.min("Description", 100) })
        .max(1000, { message: errorMessage.string.max("Description", 1000) }),
      id: z.number(),
      image: z.object({
        file: z.instanceof(FileList).optional(),
        id: z.number().min(1, { message: errorMessage.number.min("Select Photo", 1) }),
        url: z.string().optional(),
      }),
      note: z
        .string()
        .min(20, { message: errorMessage.string.min("Note", 20) })
        .max(100, { message: errorMessage.string.max("Note", 100) }),
      redColorDesc: z
        .number()
        .min(0, { message: errorMessage.number.min("Red Color", 0) })
        .max(100, { message: errorMessage.number.max("Red Color", 100) }),
      redColorSub: z
        .number()
        .min(0, { message: errorMessage.number.min("Red Color", 0) })
        .max(100, { message: errorMessage.number.max("Red Color", 100) }),
      subTitle: z
        .string()
        .min(8, { message: errorMessage.string.min("Sub Title", 8) })
        .max(32, { message: errorMessage.string.max("Sub Title", 32) }),
    })
    .merge(TitleSchema),
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
            qty: z.number().min(1, { message: errorMessage.number.min("Quantity", 1) }),
          }),
        ),
        pricingId: z.string(),
      }),
    ),
    package: z.string().min(1, { message: errorMessage.string.required("Package") }),
    price: z
      .number()
      .min(1000, { message: errorMessage.number.min("Price", 1000) })
      .max(10000000, { message: errorMessage.number.max("Price", 10000000) }),
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

// -----------------------------------------------------------------------------

export const ClientSchema = z.object({
  data: z.array(
    z.object({
      alt: z
        .string()
        .min(3, { message: errorMessage.string.min("Alt", 3) })
        .max(32, { message: errorMessage.string.max("Alt", 32) }),
      href: z.string().min(1, { message: errorMessage.string.required("Href") }),
      id: z.string(),
      logoURL: z.string().min(1, { message: errorMessage.string.required("Logo URL") }),
      theme: z.string().min(1, { message: errorMessage.string.required("Theme") }),
    }),
  ),
  title: TitleSchema,
});

export type TClientSchema = z.infer<typeof ClientSchema>;

// -----------------------------------------------------------------------------

export const ContactSchema = z.object({
  data: z.array(
    z.object({
      href: z.string().min(1, { message: errorMessage.string.required("Href") }),
      id: z.string(),
      label: z
        .string()
        .min(1, { message: errorMessage.string.min("Label", 1) })
        .max(128, { message: errorMessage.string.max("Label", 128) }),
    }),
  ),
  title: TitleSchema,
});

export type TContactSchema = z.infer<typeof ContactSchema>;
