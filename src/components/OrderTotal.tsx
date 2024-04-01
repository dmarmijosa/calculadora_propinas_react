import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeholder: () => void;
};
export const OrderTotal = ({ order, tip, placeholder }: OrderTotalProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);
  //use callback funciona igual solo que cambia en colocar ()
  return (
    <>
      <div className="space-y-3">
        <h2 className=" font-black text-2xl">Totales y Propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className=" font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className=" font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className=" font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black text-white p-3 mt-10 font-bold rounded-lg disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={() => placeholder()}
      >
        Guardar Orden
      </button>
    </>
  );
};
