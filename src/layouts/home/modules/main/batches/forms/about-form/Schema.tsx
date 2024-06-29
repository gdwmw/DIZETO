import { z } from "zod";

export const Schema = z.object({
  data: z.object({
    description: z
      .string()
      .min(100, { message: "Please enter Description minimum 100 characters." })
      .max(1000, { message: "Description maximum 1000 characters." }),
    id: z.string(),
    logoURL: z.string().min(1, { message: "Please enter Logo URL." }),
    note: z.string().min(20, { message: "Please enter Note minimum 20 characters." }).max(100, { message: "Note maximum 100 characters." }),
    subTitle: z.string().min(8, { message: "Please enter Sub Title minimum 8 characters." }).max(32, { message: "Sub Title maximum 32 characters." }),
  }),
  title: z.object({
    id: z.string(),
    title: z.string().min(2, { message: "Please enter Title minimum 2 characters." }).max(20, { message: "Title maximum 20 characters." }),
    titleRed: z.string().min(2, { message: "Please enter Title Red minimum 2 characters." }).max(20, { message: "Title Red maximum 20 characters." }),
  }),
});

export type TSchema = z.infer<typeof Schema>;
