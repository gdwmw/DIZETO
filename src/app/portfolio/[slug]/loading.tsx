import Image from "next/image";
import { FC, ReactElement } from "react";

import loading from "@/public/assets/animations/loadings/loading.svg";

const Loading: FC = (): ReactElement => (
  <main className="flex h-dvh items-center justify-center">
    <Image alt="Loading..." height={100} src={loading} width={100} />
  </main>
);

export default Loading;
