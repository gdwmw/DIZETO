import { z } from "zod";

export const Schema = z.object({
  data: z.object({
    copyright: z
      .string()
      .min(16, { message: "Please enter Copyright minimum 16 characters." })
      .max(48, { message: "Copyright maximum 48 characters." }),
    id: z.string(),
    imageFile: z.array(
      z.object({
        highlightId: z.string(),
        id: z.string(),
        imgURL: z.string().min(1, { message: "Please enter Image URL." }),
        thumbnailURL: z.string().min(1, { message: "Please enter Thumbnail URL." }),
      }),
    ),
  }),
  title: z.object({
    id: z.string(),
    title: z.string().min(2, { message: "Please enter Title minimum 2 character." }).max(20, { message: "Title maximum 20 character." }),
    titleRed: z.string().min(2, { message: "Please enter Title Red minimum 2 character." }).max(20, { message: "Title Red maximum 20 character." }),
  }),
});

export type TSchema = z.infer<typeof Schema>;
