type PaperProps = {
  id: string;
  paperPadding: boolean;
  children: React.ReactNode;
};

export default function Paper({ id, paperPadding, children }: PaperProps) {
  return (
    <section id={id}>
      <div
        className={`h-fit w-full overflow-hidden rounded-xl border border-black/50 bg-white shadow-md shadow-black/50 dark:border-white/50 dark:bg-dark dark:text-white dark:shadow-white/50 ${
          paperPadding ? "p-5" : "p-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
