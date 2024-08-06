"use client";

import { FC, ReactElement } from "react";
import { Calendar as ReactCalendar } from "react-calendar";

interface I {
  isDateBooked: (date: Date) => boolean;
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => undefined | void;
}

export const Calendar: FC<I> = (props): ReactElement => (
  <section className="space-y-1">
    <ReactCalendar
      className="!w-full text-black"
      maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0)}
      minDate={new Date()}
      onClickDay={props.setSelectedDate}
      tileDisabled={({ date }) => props.isDateBooked(date)}
      value={props.selectedDate}
      view="month"
    />
    <div className="flex items-center gap-2">
      <span className="flex size-5 items-center justify-center rounded-sm bg-white text-xs text-black">27</span>
      <span>Available</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="flex size-5 items-center justify-center rounded-sm bg-gray-300 text-xs text-gray-500">27</span>
      <span>Not Available</span>
    </div>
  </section>
);
