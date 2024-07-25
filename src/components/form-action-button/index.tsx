import { FC, ReactElement } from "react";

import Image from "next/image";

import loadingAnimation from "@/root/public/assets/animations/loadings/loading.svg";

import { Button } from "../interfaces/buttons/button";

type T = {
  loading: boolean;
  onClick: () => void;
  primaryLabel: string;
  secondaryLabel: string;
};

const FormActionButton: FC<T> = (props): ReactElement => {
  return (
    <div className="grid grid-cols-2 gap-3 font-semibold sm:flex sm:items-center">
      <Button
        className={`gap-1 sm:w-full ${props.loading ? "cursor-wait" : ""}`}
        color="red"
        disabled={props.loading}
        size="sm"
        type="submit"
        variant="outline"
      >
        {props.loading && <Image alt="Loading..." className="h-auto" src={loadingAnimation} width={25} />}
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
};

export default FormActionButton;
