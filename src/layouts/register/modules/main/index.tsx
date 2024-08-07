"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";
import logoDIZETO from "@/public/assets/images/logos/dizeto.svg";
import { Button, ButtonTWM } from "@/src/components/interfaces/button";
import { Input } from "@/src/components/interfaces/inputs";
import { ContentModal } from "@/src/components/interfaces/modal";
import { RegisterSchema, TRegisterSchema } from "@/src/schemas/auth";
import { POSTAuth } from "@/src/utils/api";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [doesNotMatch, setDoesNotMatch] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<TRegisterSchema>({
    defaultValues: { confirmPassword: "", email: "", name: "", password: "", username: "" },
    resolver: zodResolver(RegisterSchema),
  });

  const handleCreateAccount = useMutation({
    mutationFn: POSTAuth,
    onError: () => setLoading(false),
    onMutate: () => setLoading(true),
    onSuccess: () => {
      router.push("/login");
      reset();
    },
  });

  const onSubmit: SubmitHandler<TRegisterSchema> = (dt) => {
    setDoesNotMatch(false);
    if (dt.confirmPassword === dt.password) {
      handleCreateAccount.mutate(dt);
    } else {
      setDoesNotMatch(true);
    }
  };

  useEffect(() => {
    const nameInput = document.querySelector('input[name="name"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');

    if (nameInput) {
      nameInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const newValue = target.value.replace(/[^a-zA-Z\s]/g, "");
        target.value = newValue;
        setValue("name", newValue, { shouldValidate: true });
      });
    }

    if (usernameInput) {
      usernameInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const newValue = target.value.replace(/[^a-z]/g, "");
        target.value = newValue;
        setValue("username", newValue, { shouldValidate: true });
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const newValue = target.value.replace(/\s/g, "");
        target.value = newValue;
        setValue("password", newValue, { shouldValidate: true });
      });
    }

    return () => {
      /* eslint-disable @typescript-eslint/no-empty-function */
      if (nameInput) {
        nameInput.removeEventListener("input", () => {});
      }
      if (usernameInput) {
        usernameInput.removeEventListener("input", () => {});
      }
      if (passwordInput) {
        passwordInput.removeEventListener("input", () => {});
      }
      /* eslint-enable @typescript-eslint/no-empty-function */
    };
  }, [setValue]);

  const INPUT_FIELDS_DATA = [
    { errorMessage: errors.name?.message, id: "1", label: "Name", name: "name", type: "text" },
    { errorMessage: errors.email?.message, id: "2", inputMode: "email" as const, label: "Email", name: "email", type: "text" },
    { errorMessage: errors.username?.message, id: "3", label: "Username", name: "username", type: "text" },
    { errorMessage: errors.password?.message, id: "4", label: "Password", name: "password", type: "password" },
    { errorMessage: errors.confirmPassword?.message, id: "5", label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];

  return (
    <main>
      <section className="flex h-screen items-center justify-center px-5">
        <ContentModal className="max-w-[350px] space-y-5">
          <div className="flex items-center gap-2">
            <Image alt="DIZETO" priority src={logoDIZETO} width={50} />
            <span className="text-2xl font-semibold text-black dark:text-white">REGISTER</span>
            <div className="h-0.5 w-full rounded-full bg-red-600" />
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              {INPUT_FIELDS_DATA.map((dt) => (
                <Input
                  color="black"
                  disabled={loading}
                  errorMessage={dt.errorMessage}
                  icon={dt.type !== "password" ? null : visibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} />}
                  iconOnClick={() => setVisibility((prev) => !prev)}
                  inputMode={dt.inputMode}
                  key={dt.id}
                  label={dt.label}
                  type={dt.type !== "password" ? dt.type : visibility ? "text" : "password"}
                  {...register(dt.name as keyof TRegisterSchema)}
                />
              ))}
            </div>

            <span className="text-center text-sm text-red-600"> {doesNotMatch && "Confirm Password does not match Password"}</span>

            <Button className={`gap-1 ${loading ? "cursor-wait" : ""}`} color="red" disabled={loading} size="sm" type="submit" variant="outline">
              {loading && <Image alt="Loading..." priority src={loadingAnimation} width={25} />}
              Submit
            </Button>
          </form>

          <span className="flex items-center justify-center gap-1 text-center text-xs text-black dark:text-white">
            Already have an account?
            <Link className={ButtonTWM({ className: "text-xs", color: "red", size: "sm", variant: "ghost" })} href={"/login"}>
              Login
            </Link>
          </span>
          <span className="block text-center text-xs text-black dark:text-white">&copy; 2021 DIZETO. All rights reserved.</span>
        </ContentModal>
      </section>
    </main>
  );
};
