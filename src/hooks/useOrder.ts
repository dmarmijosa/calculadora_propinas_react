import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip]= useState(0);
  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateOrder = order.map((orderItem) => {
        if (orderItem.id === item.id) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItems = (id: MenuItem['id'])=>{
    const itemsAux = order.filter((item)=> (id != item.id));
    setOrder(itemsAux);
  }

  const placeholder=()=>{
    setOrder([]);
    setTip(0);
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItems,
    placeholder
  };
}
