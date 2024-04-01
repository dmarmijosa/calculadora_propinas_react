import { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
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
