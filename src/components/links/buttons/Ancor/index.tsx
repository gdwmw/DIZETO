import Link from "next/link";
import { FC, ReactElement } from "react";

type TAncorButtonProps = {
  hrf: string;
  label: string;
  icon: ReactElement;
};

export const AncorButton: FC<TAncorButtonProps> = ({ hrf, label, icon }): ReactElement => {
  return (
    <Link href={hrf} target="_blank" rel="noopener noreferrer" className="red-line-button flex items-center justify-center gap-1">
      {icon}
      <span>{label}</span>
    </Link>
  );
};
