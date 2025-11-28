function slice(arg, start, end = arg.length - 1) {
  if (start < 0) {
    start = arg.length + start;
  }
  if (end < 0) {
    end = arg.length + end;
  }
  if (start > end) {
    return [];
  }
  let res = "";
  if (typeof arg === "string") {
    for (let i = start; i < end; i++) {
      res += arg[i];
    }
    return res;
  }
  res = [];
  for (let i = start; i < end; i++) {
    res.push(arg[i]);
  }
  return res;
}
