"use client";

import { FC, ReactElement } from "react";

import { signOut } from "next-auth/react";

import { Button } from "@/src/components/interfaces/button";

export const Logout: FC = (): ReactElement => (
  <Button color="red" onClick={() => signOut()} size="sm" variant="outline">
    Logout
  </Button>
);
