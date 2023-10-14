type PaperProps = {
  id: string;
  paperBackground: boolean;
  paperPadding: boolean;
  children: React.ReactNode;
};

export default function Paper({ id, paperBackground, paperPadding, children }: PaperProps) {
  return (
    <section id={id}>
      <div
        className={`h-fit w-full overflow-hidden rounded-xl border border-black/50 shadow-md shadow-black/50 dark:border-white/50 dark:text-white dark:shadow-white/50 ${
          paperBackground && "bg-white dark:bg-dark"
        } ${paperPadding ? "p-5" : "p-0"}`}
      >
        {children}
      </div>
    </section>
  );
}
