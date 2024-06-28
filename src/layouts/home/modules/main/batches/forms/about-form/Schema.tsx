import { z } from "zod";

export const Schema = z.object({
  data: z.object({
    description: z
      .string()
      .min(100, { message: "Please enter Description minimum 100 character." })
      .max(1000, { message: "Description maximum 1000 character." }),
    id: z.string(),
    logoUrl: z.string().min(1, { message: "Please enter Logo URL." }),
    note: z.string().min(20, { message: "Please enter Note minimum 20 character." }).max(100, { message: "Note maximum 100 character." }),
    subTitle: z.string().min(8, { message: "Please enter Sub Title minimum 8 character." }).max(32, { message: "Sub Title maximum 32 character." }),
  }),
  title: z.object({
    id: z.string(),
    title: z.string().min(2, { message: "Please enter Title minimum 2 character." }).max(20, { message: "Title maximum 20 character." }),
    titleRed: z.string().min(2, { message: "Please enter Title Red minimum 2 character." }).max(20, { message: "Title Red maximum 20 character." }),
  }),
});

export type TSchema = z.infer<typeof Schema>;
