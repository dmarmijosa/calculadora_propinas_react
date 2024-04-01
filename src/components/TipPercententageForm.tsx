import { Dispatch, SetStateAction } from "react";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type tipPercententageForm = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};
export const TipPercententageForm = ({ setTip, tip }: tipPercententageForm) => {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div className="flex gap-2" key={tipOption.id}>
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              name="tip"
              id={tipOption.id}
              value={tipOption.value}
              onChange={(valor) => setTip(Number(valor.target.value))}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
        <div></div>
      </form>
    </div>
  );
};
