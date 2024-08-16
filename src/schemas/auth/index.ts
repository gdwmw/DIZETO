import { z } from "zod";

/* eslint-disable perfectionist/sort-objects */
const errorMessage = {
  string: {
    min: (label: string, min: number) => `Please enter ${label} minimum ${min} characters`,
    max: (label: string, max: number) => `${label} maximum ${max} characters`,
    required: (label: string) => `Please enter ${label}`,
    email: "Invalid email address",
  },
  number: {
    min: (label: string, min: number) => `${label} minimum ${min}`,
    max: (label: string, max: number) => `${label} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */

// -----------------------------------------------------------------------------

export const LoginSchema = z.object({
  identifier: z.string().min(1, { message: errorMessage.string.required("Username") }),
  password: z.string().min(1, { message: errorMessage.string.required("Password") }),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;

// -----------------------------------------------------------------------------

export const RegisterSchema = z.object({
  confirmPassword: z
    .string()
    .min(8, { message: errorMessage.string.min("Confirm Password", 8) })
    .max(16, { message: errorMessage.string.min("Confirm Password", 16) }),
  data: z.object({
    email: z
      .string()
      .min(1, { message: errorMessage.string.required("Email") })
      .email({ message: errorMessage.string.email }),
    password: z
      .string()
      .min(8, { message: errorMessage.string.min("Password", 8) })
      .max(16, { message: errorMessage.string.max("Password", 16) })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      }),
    username: z
      .string()
      .min(3, { message: errorMessage.string.min("Username", 3) })
      .max(12, { message: errorMessage.string.min("Username", 12) })
      .toLowerCase(),
  }),
  dataUsers: z.object({
    firstName: z
      .string()
      .min(3, { message: errorMessage.string.min("First Name", 3) })
      .max(32, { message: errorMessage.string.max("First Name", 32) }),
    lastName: z
      .string()
      .min(3, { message: errorMessage.string.min("Last Name", 3) })
      .max(32, { message: errorMessage.string.max("Last Name", 32) }),
  }),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
