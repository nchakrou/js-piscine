const words = ["i", "you", "he", "she", "it", "they", "we"];

function pronoun(arg) {
  const res = {};
  const split = arg.split(" ");

  for (let i = 0; i < split.length; i++) {

    if (words.includes(split[i])) {
      res[split[i]] = res[split[i]] ? res[split[i]] : { word: [], count: 0 };
      res[split[i]].count++;
      const next = split[i + 1];
      if (next && !words.includes(next)) {
        res[split[i]].word.push(next);
      }
    }
  }

  return res;
}
