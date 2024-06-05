import React from "react";
import CustomCheckbox from "./CustomCheckbox";

export type CheckboxModel = {
  label: string;
  checked: number;
  items?: Array<CheckboxModel>;
};

interface MultilevelCheckboxProps {
  models: Array<CheckboxModel>;
  onChange: Function;
}

const MultilevelCheckbox = ({ models, onChange }: MultilevelCheckboxProps) => {
  const findNodeByLabel = (label: string, nodes: Array<CheckboxModel>) => {
    let node: CheckboxModel | undefined;
    const parents: Array<CheckboxModel> = [];

    const search = (
      nodes: Array<CheckboxModel>,
      parentChain: Array<CheckboxModel>
    ) => {
      for (let n of nodes) {
        if (n.label === label) {
          node = n;
          parents.push(...parentChain);
          return true;
        }
        if (n.items) {
          parentChain.push(n);
          if (search(n.items, parentChain)) return true;
          parentChain.pop();
        }
      }
      return false;
    };

    search(nodes, []);
    return { node, parents };
  };

  const updateParentState = (parents: Array<CheckboxModel>) => {
    if (!parents.length) return;
    const parent = parents[parents.length - 1];
    const currentParentState = parent.checked;

    const noneChecked = parent.items?.every((item) => item.checked === 0);
    const allChecked = parent.items?.every((item) => item.checked === 1);

    let newParentState = -1;
    if (noneChecked) newParentState = 0;
    else if (allChecked) newParentState = 1;

    if (currentParentState === newParentState) return;
    parent.checked = newParentState;
    updateParentState(parents.splice(0, parents.length - 1));
  };

  const updateChildrenState = (node: CheckboxModel, newState: number) => {
    if (!node.items?.length) return;
    node.items.forEach((item) => {
      item.checked = newState;
      updateChildrenState(item, newState);
    });
  };

  const updateCheckboxStates = (label: string, newState: number) => {
    const newModels = JSON.parse(JSON.stringify(models));

    const { node, parents } = findNodeByLabel(label, newModels);
    if (node) node.checked = newState;
    if (node?.items) updateChildrenState(node, newState);
    if (parents.length) updateParentState(parents);

    return newModels;
  };

  const handleClickItem = (e: any) => {
    const label = e.target.value;
    const newState = e.target.checked ? 1 : 0;
    const newModels = updateCheckboxStates(label, newState);
    onChange(newModels);
  };

  const renderCheckboxTree = (items: Array<CheckboxModel>) => {
    return (
      <>
        {items.map((item) => {
          return (
            <div key={item.label}>
              <CustomCheckbox item={item} onClick={handleClickItem} />
              {item.items && (
                <div className="pl-4">{renderCheckboxTree(item.items)}</div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  return <div>{renderCheckboxTree(models)}</div>;
};

export default MultilevelCheckbox;
