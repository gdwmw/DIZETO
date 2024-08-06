"use client";

import { FC, ReactElement, useState } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/interfaces/button";
import { ContentModal } from "@/src/components/interfaces/modal";
import { GETBookingById, PUTBooking } from "@/src/utils/api";

interface I {
  authId: string;
  id: string;
}

export const Main: FC<I> = (props): ReactElement => {
  const router = useRouter();
  const { data, error, isLoading } = useQuery({
    queryFn: () => GETBookingById({ authId: props.authId, id: props.id }),
    queryKey: ["GETBookingById", props.authId, props.id],
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<null | string>(null);
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const updateBooking = useMutation({
    mutationFn: PUTBooking,
    onMutate: () => setLoading(true),
    onSuccess: () => {
      router.push("/");
    },
  });

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handlePayment = () => {
    if (data && selectedPaymentMethod) {
      updateBooking.mutate({
        ...data,
        paymentMethod: selectedPaymentMethod,
        status: "on progress",
      });
    }
  };

  const formatPrice = (price: number | undefined) => {
    if (price === undefined) {
      return "Loading...";
    }
    return `IDR ${new Intl.NumberFormat("en-US", { minimumFractionDigits: 0 }).format(price)}`;
  };

  const capitalizeWords = (str: string) => str.replace(/\b\w/g, (char) => char.toUpperCase());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading booking data</div>;
  }

  return (
    <main>
      <section className="flex h-screen items-center justify-center px-5 dark:text-white">
        <ContentModal className="max-w-[700px] space-y-5">
          <h1 className="mb-4 text-center text-2xl font-bold">Payment Details</h1>
          {data ? (
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span> <span>{formatPrice(data.total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Status:</span> <span>{capitalizeWords(data.status)}</span>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <Button
                    className={`w-full ${selectedPayment === "1" ? "bg-red-600 text-white" : ""}`}
                    color="red"
                    onClick={() => {
                      handlePaymentMethodSelect("GoPay");
                      setSelectedPayment("1");
                    }}
                    size="sm"
                    variant="outline"
                  >
                    GoPay
                  </Button>
                  <Button
                    className={`w-full ${selectedPayment === "2" ? "bg-red-600 text-white" : ""}`}
                    color="red"
                    onClick={() => {
                      handlePaymentMethodSelect("ShopeePay");
                      setSelectedPayment("2");
                    }}
                    size="sm"
                    variant="outline"
                  >
                    ShopeePay
                  </Button>
                </div>
                <Button
                  className="w-full"
                  color="red"
                  disabled={!selectedPaymentMethod || loading}
                  onClick={handlePayment}
                  size="sm"
                  variant="outline"
                >
                  {loading ? "Loading..." : "Pay Now"}
                </Button>
              </div>
            </div>
          ) : (
            <div>No booking data available</div>
          )}
        </ContentModal>
      </section>
    </main>
  );
};
