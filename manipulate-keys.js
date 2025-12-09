function filterKeys(obj, fn) {
  let res = {};
  for (let i in obj) {
    if (fn(i)) {
      res[i] = obj[i];
    }
  }
  return res;
}

function mapKeys(obj, fn) {
  let res = {};
  for (let key in obj) {
    res[fn(key)] = obj[key];
  }
  return res;
}
function reduceKeys(obj, fn, acc) {
  let first = acc !== undefined;
  for (let key in obj) {
    if (!first) {
      acc = key;
      first = true;
    } else {
      acc = fn(acc, key);
    }
  }

  return acc;
}
