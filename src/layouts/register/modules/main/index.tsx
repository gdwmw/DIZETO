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
import { POSTDataUsers, POSTRegister } from "@/src/utils/api";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<TRegisterSchema>({
    defaultValues: { confirmPassword: "", data: { email: "", password: "", username: "" }, dataUsers: { firstName: "", lastName: "" } },
    resolver: zodResolver(RegisterSchema),
  });

  const handleRegisterAccount = useMutation({
    mutationFn: POSTRegister,
    onError: (error) => {
      if (error instanceof Error && error.message.includes("already taken")) {
        setErrorMessage("Email or Username are already taken");
      } else {
        setErrorMessage("An error occurred in the registration process!");
      }
    },
  });

  const handleRegisterDataUsers = useMutation({
    mutationFn: POSTDataUsers,
    onError: () => {
      setErrorMessage("An error occurred in the registration data user process!");
    },
  });

  const onSubmit: SubmitHandler<TRegisterSchema> = async (dt) => {
    setLoading(true);
    setErrorMessage("");

    if (dt.confirmPassword === dt.data.password) {
      try {
        const resA = await handleRegisterAccount.mutateAsync(dt.data);

        if (!resA) {
          return;
        }

        const resB = await handleRegisterDataUsers.mutateAsync({ data: dt.dataUsers, token: resA.token });

        if (!resB) {
          return;
        }

        console.log("Register Success!");
        router.push("/login");
        reset();
      } catch (error) {
        console.log("Register Failed!");
        console.error("--- Registration Error Message ---", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setErrorMessage("Confirm Password does not match Password");
    }
  };

  useEffect(() => {
    const firstNameInput = document.querySelector('input[name="dataUsers.firstName"]');
    const lastNameInput = document.querySelector('input[name="dataUsers.lastName"]');
    const usernameInput = document.querySelector('input[name="data.username"]');
    const passwordInput = document.querySelector('input[name="data.password"]');

    if (firstNameInput) {
      firstNameInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const newValue = target.value.replace(/[^a-zA-Z\s]/g, "");
        target.value = newValue;
        setValue("dataUsers.firstName", newValue, { shouldValidate: true });
      });
    }

    if (lastNameInput) {
      lastNameInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const newValue = target.value.replace(/[^a-zA-Z\s]/g, "");
        target.value = newValue;
        setValue("dataUsers.lastName", newValue, { shouldValidate: true });
      });
    }

    if (usernameInput) {
      usernameInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const newValue = target.value.replace(/[^a-z]/g, "");
        target.value = newValue;
        setValue("data.username", newValue, { shouldValidate: true });
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        const newValue = target.value.replace(/\s/g, "");
        target.value = newValue;
        setValue("data.password", newValue, { shouldValidate: true });
      });
    }

    return () => {
      /* eslint-disable @typescript-eslint/no-empty-function */
      if (firstNameInput) {
        firstNameInput.removeEventListener("input", () => {});
      }
      if (lastNameInput) {
        lastNameInput.removeEventListener("input", () => {});
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
    { errorMessage: errors.dataUsers?.firstName?.message, id: "1", label: "First Name", name: "dataUsers.firstName", type: "text" },
    { errorMessage: errors.dataUsers?.lastName?.message, id: "2", label: "Last Name", name: "dataUsers.lastName", type: "text" },
    { errorMessage: errors.data?.email?.message, id: "3", inputMode: "email" as const, label: "Email", name: "data.email", type: "text" },
    { errorMessage: errors.data?.username?.message, id: "4", label: "Username", name: "data.username", type: "text" },
    { errorMessage: errors.data?.password?.message, id: "5", label: "Password", name: "data.password", type: "password" },
    { errorMessage: errors.confirmPassword?.message, id: "6", label: "Confirm Password", name: "confirmPassword", type: "password" },
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

            <span className="text-center text-sm text-red-600"> {errorMessage}</span>

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
