function flat(arr, num = 1) {
  let res = [];
  if (num <= 0) {
    return arr;
  }
  while (num > 0) {
    res = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        res.push(...arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
    arr = res;
    num--;
  }
  return res;
}
