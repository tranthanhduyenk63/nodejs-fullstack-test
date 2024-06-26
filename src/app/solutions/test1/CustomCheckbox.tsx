import { ChangeEventHandler } from "react";
import type { CheckboxModel } from "./MultilevelCheckbox";

interface CustomCheckboxProps {
  item: CheckboxModel;
  onClick: ChangeEventHandler;
}

const CustomCheckbox = ({ item, onClick }: CustomCheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={onClick}
        id={item.label}
        value={item.label}
        checked={item.checked === 1}
        ref={(input) => {
          if (input) input.indeterminate = item.checked === -1;
        }}
        className="custom-checkbox"
      />
      <label htmlFor={item.label} className="ml-1">{item.label}</label>
    </>
  );
};

export default CustomCheckbox;
