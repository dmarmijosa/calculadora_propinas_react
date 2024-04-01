import { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      onClick={() => {
        addItem(item);
      }}
      className=" border-2 rounded-lg border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
    >
      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    </button>
  );
};

export default MenuItem;