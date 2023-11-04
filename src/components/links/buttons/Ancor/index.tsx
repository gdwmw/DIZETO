type AncorButtonProps = {
  hrf: string;
  label: string;
  icon: React.ReactElement;
};

export function AncorButton({ hrf, label, icon }: AncorButtonProps): JSX.Element {
  return (
    <a href={hrf} target="_blank" rel="noopener noreferrer" className="red-line-button flex items-center justify-center gap-1">
      {icon}
      <span>{label}</span>
    </a>
  );
}
