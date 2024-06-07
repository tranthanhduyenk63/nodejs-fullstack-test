import Image from "next/image";
import React from "react";
import { findDifference } from "./findDifference";

const Solution5 = () => {
  const a: Array<string> = ['Q', 'L', 'L', 'N', 'N', 'T', 'Q', 'T', 'U', 'L', 'T'];
  const b: Array<string> = ['T', 'Q', 'N', 'L', 'L', 'N', 'Q', 'T'];

  const printArray = (arr: Array<any>) => {
    const str = JSON.stringify(arr, null, '\t');
    const arrString = str.replace(/\"/g, "");
    return arrString;
  };

  return (
    <div>
      <Image
        src="/solution5-2.png"
        alt="solution-5"
        width={500}
        height={700}
        className="pl-4 pb-4"
      />
      Example:
      <p><b>a = </b> {printArray(a)}</p>
      <p><b>b = </b> {printArray(b)}</p>
      <p><b>Diff = </b> {printArray(findDifference(a,b))}</p>
    </div>
  );
};

export default Solution5;
