"use client";

import { FC, ReactElement, useCallback, useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { ContentModal } from "@/src/components/interfaces/modal";
import { GETAuth, GETPricingById } from "@/src/utils/api";

import { Calendar, TimePicker } from "./batches";

interface I {
  id: string;
}

export const Main: FC<I> = (props): ReactElement => {
  const { data: dataPricing } = useQuery({
    queryFn: () => GETPricingById(props.id),
    queryKey: ["GETPricingById", props.id],
  });

  const { data: dataAuth } = useQuery({
    queryFn: GETAuth,
    queryKey: ["GETAuth"],
  });

  const userBookings = useMemo(() => {
    if (!dataAuth) {
      return [];
    }
    return dataAuth.flatMap((user) => user?.booking?.map((booking) => booking.date.slice(0, 10)));
  }, [dataAuth]);

  const bookedDatesData = useMemo(() => userBookings.filter(Boolean), [userBookings]);
  const bookedDates = useMemo(() => bookedDatesData.map((date) => new Date(date!)), [bookedDatesData]);
  const isDateBooked = useCallback(
    (date: Date) => bookedDates.some((bookedDate) => bookedDate.toDateString() === date.toDateString()),
    [bookedDates],
  );

  const [activeTime, setActiveTime] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const formatPrice = (price: number | undefined) => {
    if (price === undefined) {
      return "Loading...";
    }
    return `IDR ${new Intl.NumberFormat("en-US", { minimumFractionDigits: 0 }).format(price)}`;
  };

  return (
    <main>
      <section className="flex h-screen items-center justify-center px-5 dark:text-white">
        <ContentModal className="max-w-[700px] space-y-5">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-600">{dataPricing?.category ?? "Loading..."}</h1>
            <span className="block text-sm">PACKAGE {dataPricing?.package ?? "Loading..."}</span>
            <span className="block text-xl">{formatPrice(dataPricing?.price)}</span>
          </div>
          <div className="flex gap-5">
            <Calendar isDateBooked={isDateBooked} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <TimePicker
              activeTime={activeTime}
              packageId={dataPricing?.id ?? ""}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              setActiveTime={setActiveTime}
              setSelectedTime={setSelectedTime}
              total={dataPricing?.price ?? 0}
            />
          </div>
        </ContentModal>
      </section>
    </main>
  );
};
