import { FC, ReactElement } from "react";

const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return "TH";
  }
  switch (day % 10) {
    case 1:
      return "ST";
    case 2:
      return "ND";
    case 3:
      return "RD";
    default:
      return "TH";
  }
};

const formatDate = (param: string): string => {
  const date = new Date(param);
  const day = date.getDate();
  const suffix = getDaySuffix(day);
  const month = date.toLocaleString("en-US", { month: "long" }).toUpperCase();
  const year = date.getFullYear();
  return `${day}${suffix} ${month}, ${year}`;
};

interface I {
  date: string;
  title: string;
}

export const PortfolioTitle: FC<I> = (props): ReactElement => {
  const titleLength = props.title.length;

  return (
    <div>
      <h2 className="whitespace-nowrap text-center text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl dark:text-white">
        {props.title?.slice(0, titleLength - 2)}
        <span className="text-red-600">{props.title?.slice(titleLength - 2)}</span>
      </h2>
      <p className="text-end text-xs font-semibold md:text-sm lg:text-base xl:text-lg">{formatDate(props.date)}</p>
    </div>
  );
};
