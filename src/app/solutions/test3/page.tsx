"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Solution3 from "./Solution3";

const Test3 = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="px-4 py-4">
          <p className="font-bold mb-2">Problem</p>
          <Image src="/problem3.png" alt="problem-3" width={500} height={700} className="pl-4" />
        </div>
        <div className="px-4 py-4">
          <p className="font-bold mb-2">Solution</p>
          <div className="flex flex-col gap-4">
            <div className="pl-4">
                <Solution3 />
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="mt-2 justify-center flex font-semibold italic text-sm"
      >
        Back to problems list
      </Link>
    </div>
  );
};

export default Test3;
