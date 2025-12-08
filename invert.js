function invert(obj) {
  let res = {};
  for (let i in obj) {
    res[obj[i]] = i;
  }
  return res;
}

