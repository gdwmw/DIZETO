type PaperProps = {
  id: string;
  paperBackground: boolean;
  paperPadding: boolean;
  children: React.ReactNode;
};

export default function Paper({ id, paperBackground, paperPadding, children }: PaperProps) {
  return (
    <section id={id}>
      <div className={`paper ${paperBackground && "bg-white dark:bg-dark"} ${paperPadding ? "p-5" : "p-0"}`}>{children}</div>
    </section>
  );
}
