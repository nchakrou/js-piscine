function deepCopy(arg) {
  if (Array.isArray(arg)) {
    let res = [];
    for (let v of arg) {
      if (Array.isArray(v)) {
        res.push(deepCopy(v));
      } else {
        res.push(v);
      }
    }
  } else if (typeof arg == "object") {
    let res = {};
    for (let [k, v] of Object.entries(arg)) {
      if (typeof v != "object") {
        res[k] = v;
      } else {
        res[k] = deepCopy(v);
      }
    }
  } else {
    return arg;
  }
}
