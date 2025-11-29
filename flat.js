function flat(arr, num = 1) {
  let res = [];
  if (num <= 0) {
    return arr;
  }
  while (num > 0) {
    let solve = false
    res = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        solve = true
        res.push(...arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
    if (!solve) {
        return res
    }
    arr = res;
    num--;
  }
  return res;
}
