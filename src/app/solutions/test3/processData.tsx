const getWordHeight = (word: string) => {
  let wh = 1;
  if (/h|d|l|f|k|b/.test(word)) wh++;
  if (/q|y|p|g|j/.test(word)) wh++;
  return wh;
};

const processData = (str: string) => {
  const cleanedStr = str.replace(/[.,/#!$%^&*;:{}=\-_`~()"'`]/g, "");
  const words = cleanedStr.toLowerCase().split(/\s+/);

  const count: { [key: string]: number } = {};
  for (let word of words) {
    count[word] = (count[word] || 0) + 1;
  }

  const RATIO = 20;
  const res = [];
  for (const [word, freq] of Object.entries(count)) {
    const wh = getWordHeight(word);
    let a = RATIO * Math.sqrt(freq / (word.length * wh));

    const data = {
      word,
      count: freq,
      size: {
        width: Math.ceil(a * word.length),
        height: Math.ceil(a * wh),
      },
    };
    res.push(data);
  }

  return res;
};

export { processData };
