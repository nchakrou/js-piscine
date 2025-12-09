function filterValues(obj, fn) {
  let res = {};
  for (let i in obj) {
    if (fn(obj[i])) {
      res[i] = obj[i];
    }
  }
  return res;
}
function mapValues(obj, fn) {
  let res = {};
  for (let key in obj) {
    res[key] = fn(obj[key]);
  }
  return res;
}
function reduceValues(obj, fn, acc = 0) {
  for (let key in obj) {
    acc = fn(acc, obj[key]);
  }
  return acc;
}
