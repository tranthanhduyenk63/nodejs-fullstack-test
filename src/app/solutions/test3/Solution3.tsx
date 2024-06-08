"use client";

import React, { useState } from "react";
import { processData } from "./processData";

const initialStr = `When census data cannot be collected, statisticians collect data by developing specific experiment designs and survey samples. Representative sampling assures that inferences and conclusions can reasonably extend from the sample to the population as a whole. An experimental study involves taking measurements of the system under study, manipulating the system, and then taking additional measurements using the same procedure to determine if the manipulation has modified the values of the measurements. In contrast, an observational study does not involve experimental manipulation.
Two main statistical methods are used in data analysis: descriptive statistics, which summarize data from a sample using indexes such as the mean or standard deviation, and inferential statistics, which draw conclusions from data that are subject to random variation (e.g., observational errors, sampling variation).[7] Descriptive statistics are most often concerned with two sets of properties of a distribution (sample or population): central tendency (or location) seeks to characterize the distribution's central or typical value, while dispersion (or variability) characterizes the extent to which members of the distribution depart from its center and each other. Inferences on mathematical statistics are made under the framework of probability theory, which deals with the analysis of random phenomena.
A standard statistical procedure involves the collection of data leading to a test of the relationship between two statistical data sets, or a data set and synthetic data drawn from an idealized model. A hypothesis is proposed for the statistical relationship between the two data sets, and this is compared as an alternative to an idealized null hypothesis of no relationship between two data sets. Rejecting or disproving the null hypothesis is done using statistical tests that quantify the sense in which the null can be proven false, given the data that are used in the test. Working from a null hypothesis, two basic forms of error are recognized: Type I errors (null hypothesis is rejected when it is in fact true, giving a "false positive") and Type II errors (null hypothesis fails to be rejected when an it is in fact false, giving a "false negative"). Multiple problems have come to be associated with this framework, ranging from obtaining a sufficient sample size to specifying an adequate null hypothesis.`;

const Solution3 = () => {
  const [codeStr, setCodeStr] = useState(initialStr);

  const res = processData(codeStr).sort((a, b) => b.count - a.count);

  return (
    <div>
      <label className="italic">
        Update paragraph to see processing result:
      </label>
      <textarea
        value={codeStr}
        onChange={(e) => setCodeStr(e.target.value)}
        rows={4}
        className="w-full py-1 pl-2 rounded-md"
      />
      <p className="italic">Result:</p>
      <div className="w-full bg-white whitespace-pre h-80 rounded-md py-1 pl-2 overflow-auto">
        {res.map((item) => (
          <div className="flex items-center">
            {item.word} ({item.count})&nbsp;
            <p
              className="bg-blue-300 overflow-auto mt-2"
              style={{
                width: `${item.size.width}px`,
                height: `${item.size.height}px`,
              }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution3;
