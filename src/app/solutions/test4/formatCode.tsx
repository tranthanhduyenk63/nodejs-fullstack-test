const formatCode = (str: string) => {
  // Find positions to add new line
  const breakPositions = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ";" || str[i] === "{") breakPositions.push(i + 1);
    if (str[i] === "}") {
      let firstIdx = i + 1;
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] !== " ") {
          firstIdx = j;
          break;
        }
      }
      if (
        str[firstIdx] !== ";" &&
        str.substring(firstIdx, firstIdx + 4) !== "else"
      ) {
        breakPositions.push(i + 1);
      }
      i = firstIdx - 1;
    }
  }

  // Break string into multiple lines and add indentation
  let res = "";
  let indentLevel = 0;
  for (let i = 0; i <= breakPositions.length; i++) {
    const line = str.substring(breakPositions[i - 1] || 0, breakPositions[i] || str.length);
    if (line.includes("}") && indentLevel > 0) indentLevel--;
    res = res + "\t".repeat(indentLevel) + line.trim() + "\n";
    if (line.includes("{")) indentLevel++;
  }

  return res;
};

export { formatCode };
