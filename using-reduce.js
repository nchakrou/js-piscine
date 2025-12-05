function adder(arr, i = 0) {
  return arr.reduce((p, c) => p + c, i);
}
function sumOrMul(arr, i = 0) {
  return arr.reduce((p, c) => {
    if (c % 2 == 0) {
      return p * c;
    }
    return p + c;
  }, i);
}
function funcExec(arr,i=0) {
  return arr.reduce((p, fn) => fn(p),i);
}

