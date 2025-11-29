function split(str, sep) {
  let res = [];
  let temp = "";
  for (let s of str) {
    if (s === sep && temp != "") {
      res.push(temp);
      temp = "";
      continue;
    }
    temp += s;
  }
  if (temp !== ""){
      res.push(temp);

  }
  return res;
}
function join(arr, sep) {
  let res = "";
  for (let i in arr) {
    if (i !== 0) {
      res += sep;
    }
    res += arr[i];
  }
  return res
}
