import { FC, ReactElement } from "react";

import Image from "next/image";

import loadingAnimation from "@/public/assets/animations/loadings/loading.svg";

import { Button } from "../../interfaces/button";

interface I {
  loading: boolean;
  onClick: () => void;
  primaryLabel: string;
  secondaryLabel: string;
}

export const FormSubmitButton: FC<I> = (props): ReactElement => (
  <div className="grid grid-cols-2 gap-5 font-semibold sm:flex sm:items-center">
    <Button
      className={`gap-1 sm:w-full ${props.loading ? "cursor-wait" : ""}`}
      color="red"
      disabled={props.loading}
      size="sm"
      type="submit"
      variant="outline"
    >
      {props.loading && <Image alt="Loading..." priority src={loadingAnimation} width={25} />}
      {props.primaryLabel}
    </Button>
    <Button
      className={props.loading ? "cursor-wait" : ""}
      color="red"
      disabled={props.loading}
      onClick={props.onClick}
      size="sm"
      type="button"
      variant="outline"
    >
      {props.secondaryLabel}
    </Button>
  </div>
);
