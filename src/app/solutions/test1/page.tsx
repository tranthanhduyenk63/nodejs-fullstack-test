"use client"

import React from "react";
import Solution1 from "./Solution1";
import Image from "next/image";
import Link from "next/link";

const Test1 = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="px-4 py-4">
          <p className="font-bold mb-2">Problem</p>
          <Image src="/problem1.png" alt="problem-1" width={600} height={800} className="pl-4" />
        </div>
        <div className="px-4 py-4">
          <p className="font-bold mb-2">Solution</p>
          <div className="flex flex-col gap-4">
            <div className="pl-4">
              <Solution1 />
            </div>
            <div>
              <p className="font-semibold">Idea:</p>
              <p>
                I create a component called <b>MultilevelCheckbox</b> that received
                2 props, one is <b>model</b> - data for checkbox, second is <b>onChange</b> - a function to update model after user click. 
                <br /> <br />
                When a checkbox changed its value, the component will recalculate its children and parents states, then send to <b>onChange</b> the updated model.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="mt-8 justify-center flex font-semibold italic text-sm"
      >
        Back to problems list
      </Link>
    </div>
  );
};

export default Test1;
