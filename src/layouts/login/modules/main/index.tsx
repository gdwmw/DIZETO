"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";
import logoDIZETO from "@/public/assets/images/logos/dizeto.svg";
import { Button, ButtonTWM } from "@/src/components/interfaces/button";
import { Input } from "@/src/components/interfaces/inputs";
import { ContentModal } from "@/src/components/interfaces/modal";
import { LoginSchema, TLoginSchema } from "@/src/schemas/auth";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TLoginSchema>({
    defaultValues: { identifier: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async (dt) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await signIn("credentials", {
        identifier: dt.identifier,
        password: dt.password,
        redirect: false,
      });

      if (!res?.ok) {
        if (res?.error?.includes("Invalid")) {
          setErrorMessage("Invalid Username or Password");
          throw new Error("Invalid Username or Password");
        } else {
          setErrorMessage("An error occurred in the authentication process!");
        }
      }

      console.log("Login Success!");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("Login Failed!");
      console.error("--- Authentication Error Message ---", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="flex h-screen items-center justify-center px-5">
        <ContentModal className="max-w-[350px] space-y-5">
          <div className="flex items-center gap-2">
            <Image alt="DIZETO" priority src={logoDIZETO} width={50} />
            <span className="text-2xl font-semibold text-black dark:text-white">LOGIN</span>
            <div className="h-0.5 w-full rounded-full bg-red-600" />
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Input
                color="black"
                disabled={loading}
                errorMessage={errors.identifier?.message}
                label="Username"
                type="text"
                {...register("identifier")}
              />
              <Input
                color="black"
                disabled={loading}
                errorMessage={errors.password?.message}
                icon={visibility ? <IoIosEye size={18} /> : <IoIosEyeOff size={18} />}
                iconOnClick={() => setVisibility((prev) => !prev)}
                label="Password"
                type={visibility ? "text" : "password"}
                {...register("password")}
              />
            </div>

            <span className="text-center text-sm text-red-600"> {errorMessage}</span>

            <Button className={`gap-1 ${loading ? "cursor-wait" : ""}`} color="red" disabled={loading} size="sm" type="submit" variant="outline">
              {loading && <Image alt="Loading..." priority src={loadingAnimation} width={25} />}
              Submit
            </Button>
          </form>

          <span className="flex items-center justify-center gap-1 text-center text-xs text-black dark:text-white">
            Don&apos;t have an account yet?
            <Link className={ButtonTWM({ className: "text-xs", color: "red", size: "sm", variant: "ghost" })} href={"/register"}>
              Register
            </Link>
          </span>
          <span className="block text-center text-xs text-black dark:text-white">&copy; 2021 DIZETO. All rights reserved.</span>
        </ContentModal>
      </section>
    </main>
  );
};
