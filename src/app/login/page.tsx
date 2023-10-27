"use client";

import InputText from "@/components/inputs/InputText";
import InputPassword from "@/components/inputs/InputPassword";
import Image from "next/image";
import imgDIZETO from "@/assets/images/logo/dizeto.svg";
import loadingAnimation from "@/assets/loading/loading.svg";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const session = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn(`credentials`, {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        setInvalid(true);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      setLoading(true);
      setTimeout(() => {
        router.push("/contentmanagement");
      }, 1000);
    }
  }, [session, router]);
  return (
    <main className="container mx-auto flex h-screen w-screen items-center justify-center px-5">
      <form
        onSubmit={handleSubmit}
        className="paper-login flex h-[500px] w-[400px] flex-col items-center justify-center gap-5 bg-white p-5 dark:bg-dark"
      >
        <Image src={imgDIZETO} alt="DIZETO" height={150} width={150} quality={50} priority />
        <InputText label="Username" id="Username" width="100%" value={username} onChange={(e) => setUsername(e.target.value)} />
        <InputPassword label="Password" id="Password" width="100%" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="text-center text-lg text-red-500">{invalid && "Invalid Username Or Password"}</p>
        <button
          type="submit"
          className={`red-line-button-submit flex w-full items-center justify-center gap-1 ${
            loading ? "cursor-wait" : "hover:bg-red-600 hover:text-white"
          }`}
          disabled={loading}
        >
          <span>LOGIN</span>
          {loading && <Image src={loadingAnimation} alt="Loading..." height={20} width={20} quality={50} priority />}
        </button>
        <p className="mt-1 font-semibold">© 2021 DIZETO. All rights reserved.</p>
      </form>
    </main>
  );
}
