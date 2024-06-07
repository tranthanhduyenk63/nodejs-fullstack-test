const findDifference = (a: Array<string>, b: Array<string>) => {
  const res: Array<string> = [];

  const count: { [key: string]: number } = {};

  a.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });
  b.forEach((item) => {
    if (count[item] > 1) count[item]--;
    else if (count[item] === 1) delete count[item];
    else res.push(item);
  });

  for (const [key, value] of Object.entries(count)) {
    for (let i = 0; i < value; i++) {
      res.push(key);
    }
  }

  return res;
};

export { findDifference };
