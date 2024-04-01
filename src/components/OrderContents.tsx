import { MenuItems, OrderItem } from "../types";
import { formatCurrency } from "../helpers";
type OrderContentsProps = {
  order: OrderItem[];
  removeItems: (id: MenuItems["id"]) => void;
};
export const OrderContents = ({ order, removeItems }: OrderContentsProps) => {
  return (
    <div>
      <h2 className=" font-black text-4xl">Consumo</h2>
      <div className="space-y-3">
        {order.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className=" font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                onClick={() => removeItems(item.id)}
                className="bg-red-700 h-8 w-8 rounded-full text-white active:bg-red-900 font-black"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
