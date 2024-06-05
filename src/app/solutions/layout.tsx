import React from "react";

const SolutionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="mx-8 py-6">{children}</div>;
};

export default SolutionLayout;
