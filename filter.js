function filter(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

function reject(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}
function partition(arr, fn) {
  let res = [];
  res.push(filter(arr, fn));
  res.push(reject(arr, fn));
  return res;
}
