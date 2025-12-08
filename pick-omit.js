function pick(obj, arr) {
  let res = {};
  if (!Array.isArray(arr)) {
    arr = [arr];
  }
  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwn(obj, arr[i])) {
      res[arr[i]] = obj[arr[i]];
    }
  }
  return res;
}
function omit(obj, arr) {
  let res = {};
  if (!Array.isArray(arr)) {
    arr = [arr];
  }
  for (let key in obj) {
    if (Object.hasOwn(obj, key) && !arr.includes(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}
