"use client";

import { useEffect, useState } from "react";

export default function DateTime(): JSX.Element {
  const [dateTime, setDateTime] = useState<string>("00/00/0000 - 00:00:00");

  useEffect(() => {
    const dateTimeInterval = setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate
        .toLocaleString("id-ID", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(" ", "")
        .replace(",", " - ")
        .replace(".", ":")
        .replace(".", ":");

      setDateTime(formattedDate);
    }, 1000);

    window.innerWidth < 1024 && clearInterval(dateTimeInterval);

    return () => {
      clearInterval(dateTimeInterval);
    };
  }, []);
  return (
    <>
      <div className="hidden h-16 w-0.5 rounded-full bg-black dark:bg-white lg:block" />
      <div className="hidden flex-col items-center justify-center lg:flex">
        <p className="w-[250px] text-center text-xl font-bold text-red-600">{dateTime}</p>
        <h4 className="text-xl font-semibold">Date - Time</h4>
      </div>
    </>
  );
}
