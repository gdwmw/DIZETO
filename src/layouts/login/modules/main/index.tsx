"use client";

import { FC, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

import loadingAnimation from "@/root/public/assets/animations/loadings/loading.svg";
import logoDIZETO from "@/root/public/assets/images/logos/dizeto.svg";
import { Button, ButtonTWM } from "@/src/components/interfaces/button";
import { Input } from "@/src/components/interfaces/inputs";
import { ContentModal } from "@/src/components/interfaces/modal";
import { LoginSchema, TLoginSchema } from "@/src/schemas/auth";

export const Main: FC = (): ReactElement => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TLoginSchema>({
    defaultValues: { password: "", username: "" },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<TLoginSchema> = async (dt) => {
    setLoading(true);
    setInvalidCredentials(false);

    try {
      const res = await signIn("credentials", {
        password: dt.password,
        redirect: false,
        username: dt.username,
      });

      if (!res?.ok) {
        setLoading(false);
        setInvalidCredentials(true);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex h-screen items-center justify-center px-5">
      <ContentModal className="max-w-[350px] space-y-5">
        <div className="flex items-center gap-2">
          <Image alt="DIZETO" priority src={logoDIZETO} width={50} />
          <span className="text-2xl font-semibold text-black dark:text-white">LOGIN</span>
          <div className="h-0.5 w-full rounded-full bg-red-600" />
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Input color="black" disabled={loading} errorMessage={errors.username?.message} label="Username" type="text" {...register("username")} />
            <Input
              color="black"
              disabled={loading}
              errorMessage={errors.password?.message}
              icon={visibility ? <IoMdEye size={18} /> : <IoIosEyeOff size={18} />}
              iconOnClick={() => setVisibility((prev) => !prev)}
              label="Password"
              type={visibility ? "text" : "password"}
              {...register("password")}
            />
          </div>

          <span className="text-center text-sm text-red-600"> {invalidCredentials && "Invalid Username or Password"}</span>

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
    </main>
  );
};
