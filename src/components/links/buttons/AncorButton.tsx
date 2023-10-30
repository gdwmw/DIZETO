import { ReactElement } from "react";

export default function AncorButton({ hrf, label, icon }: { hrf: string; label: string; icon: ReactElement }) {
  return (
    <a href={hrf} target="_blank" rel="noopener noreferrer" className="red-line-button flex items-center justify-center gap-1">
      {icon}
      <span>{label}</span>
    </a>
  );
}
