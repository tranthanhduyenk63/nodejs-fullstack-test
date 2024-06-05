"use client";

import React, { useState, lazy } from "react";
import type { CheckboxModel } from "./MultilevelCheckbox";

const MultilevelCheckbox = lazy(() => import("./MultilevelCheckbox"));

const initialModels: Array<CheckboxModel> = [
  { label: "Country 0", checked: 0 },
  {
    label: "Country A",
    checked: 0,
    items: [
      { label: "State B", checked: 0 },
      {
        label: "State C",
        checked: -1,
        items: [
          { label: "Street D", checked: 1 },
          { label: "Street E", checked: 0 },
        ],
      },
    ],
  },
  {
    label: "Country F",
    checked: -1,
    items: [
      { label: "State G", checked: 0 },
      { label: "State I", checked: 1 },
    ],
  },
];

const Solution1 = () => {
  const [checkboxModels, setCheckboxModels] = useState(initialModels);

  const handleChangeMultilevelCheckbox = (newModels: Array<CheckboxModel>) => {
    setCheckboxModels(newModels);
  };

  return (
    <MultilevelCheckbox
      models={checkboxModels}
      onChange={handleChangeMultilevelCheckbox}
    />
  );
};

export default Solution1;
