function invert(obj) {
  let res = {};
  for (let i in obj) {
    if (Object.hasOwn(obj,i))
    res[obj[i]] = i;
  }
  return res;
}

