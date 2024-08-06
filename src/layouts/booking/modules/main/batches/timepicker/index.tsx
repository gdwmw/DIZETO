"use client";

import { FC, ReactElement, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/interfaces/button";
import { POSTBooking } from "@/src/utils/api";

interface I {
  activeTime: number;
  packageId: string;
  selectedDate: Date | null;
  selectedTime: string;
  setActiveTime: (time: number) => void;
  setSelectedTime: (time: string) => void;
  total: number;
}

export const TimePicker: FC<I> = (props): ReactElement => {
  const router = useRouter();
  const session = useSession();
  const [loading, setLoading] = useState(false);

  const handleCreateBooking = useMutation({
    mutationFn: POSTBooking,
    onMutate: () => setLoading(true),
    onSuccess: (res) => {
      router.push(`/booking/payment/${res.authId}/${res.id}`);
    },
  });

  const toISOStringWithTimezone = (date: Date | null) => {
    if (!date) {
      return null;
    }
    const timezoneOffset = date.getTimezoneOffset() * 60000;
    const localISOTime = new Date(date.getTime() - timezoneOffset).toISOString().slice(0, -1);
    return localISOTime;
  };

  const onSubmit = () => {
    handleCreateBooking.mutate({
      authId: session.data?.user?.id ?? "",
      date: toISOStringWithTimezone(props.selectedDate) ?? "",
      packageId: props.packageId,
      paymentMethod: "",
      status: "pending",
      time: props.selectedTime,
      total: props.total,
    });
  };

  return (
    <section className="w-full max-w-[300px] space-y-3">
      <Button
        className={`w-full ${props.activeTime === 1 ? "bg-red-600 text-white" : ""}`}
        color="red"
        onClick={() => {
          props.setSelectedTime("08:00 - 10:00");
          props.setActiveTime(1);
        }}
        size="sm"
        variant="outline"
      >
        08:00 AM - 10:00 AM
      </Button>
      <Button
        className={`w-full ${props.activeTime === 2 ? "bg-red-600 text-white" : ""}`}
        color="red"
        onClick={() => {
          props.setSelectedTime("12:00 - 02:00");
          props.setActiveTime(2);
        }}
        size="sm"
        variant="outline"
      >
        12:00 PM - 02:00 PM
      </Button>
      <Button
        className={`w-full ${props.activeTime === 3 ? "bg-red-600 text-white" : ""}`}
        color="red"
        onClick={() => {
          props.setSelectedTime("03:00 - 05:00");
          props.setActiveTime(3);
        }}
        size="sm"
        variant="outline"
      >
        03:00 PM - 05:00 PM
      </Button>

      <div className="space-y-3">
        <div>
          <span className="block">
            Date:{" "}
            {props.selectedDate &&
              `${props.selectedDate.toLocaleDateString("en-US", { weekday: "long" })}, ${props.selectedDate.getDate()} ${props.selectedDate.toLocaleDateString("en-US", { month: "long" })} ${props.selectedDate.getFullYear()}`}
          </span>
          <span className="block">Time: {props.selectedTime}</span>
        </div>
        <Button
          className="w-full"
          color="red"
          disabled={!props.selectedTime || !props.selectedDate || loading}
          onClick={onSubmit}
          size="sm"
          variant="outline"
        >
          {loading ? "Loading..." : "Continue Payment"}
        </Button>
      </div>
    </section>
  );
};
