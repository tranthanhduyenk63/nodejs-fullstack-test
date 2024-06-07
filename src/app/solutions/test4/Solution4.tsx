"use client";

import React, { useState } from "react";
import { formatCode } from "./formatCode";

const initialStr = `const pleaseFormatMe = (m) => { const n = 10; const x = () => {const z = 3; return 2;}; if (m + n > 10) { if (m + n > 20) { console.log("over 20"); if (m + n > 38) { console.log("over 30"); if (m + n > 40) { console.log("over 40"); } else { console.log("between"); } } } } }`;

const Solution4 = () => {
  const [codeStr, setCodeStr] = useState(initialStr);

  return (
    <div>
      <label className="italic">Update code string to view formatted one:</label>
      <textarea
        value={codeStr}
        onChange={(e) => setCodeStr(e.target.value)}
        rows={4}
        className="w-full py-1 pl-2 rounded-md"
      />
      <p className="italic">Result:</p>
      <div className="w-full bg-white whitespace-pre h-80 rounded-md py-1 pl-2 overflow-auto">{formatCode(codeStr)}</div>
    </div>
  );
};

export default Solution4;
