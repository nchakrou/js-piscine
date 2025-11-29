function split(str, sep) {
  let res = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (sep === "") {
      res.push(str[i]);
      continue;
    }
    if (str.slice(i, i + sep.length) === sep) {
      res.push(temp);
      temp = "";
      i = i + sep.length - 1;
      continue;
    }
    temp += str[i];
  }
  if (sep != "") {
    res.push(temp);
  }

  return res;
}
function join(arr, sep) {
  let res = "";
  for (let i in arr) {
    if (i !== "0") {
      res += sep;
    }
    res += arr[i];
  }
  return res;
}
