function ceil(n) {
  if (trunc(n) - n === 0) {
    return n;
  }
  if (n < 0) {
    return trunc(n);
  }

  return trunc(n) + 1;
}


function floor(n) {
  if (trunc(n) - n === 0) {
    return n;
  }
  if (n < 0) {
    return trunc(n) - 1;
  }
  return trunc(n);
}


function round(n) {
  if (n-trunc(n)  === 0) {
    return n;
  }
  if (n < 0) {
    if (n + trunc(n) > -0.5) {
    return trunc(n);
  }
    return trunc(n) - 1;
  }
  if (n - trunc(n) >= 0.5) {
    return floor(n) + 1;
  }
  return trunc(n);
}


function trunc(n) {
  let sign = 1;
  if (n < 0) {
    n = -n;
    sign = -1;
  }
  let b = 1;
  while (b <= n) {
    b *= 10;
  }
  let res = 0;
  while (b >= 1) {
    let count = 0;
    while (n >= b) {
      n -= b;
      count++;
    }
    res = res * 10 + count;
    b /= 10;
  }
  return res * sign;
}
const nums =[3, -3, 3, -3, 0]
console.log(nums.map(round), )
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))
console.log(-3.5 + trunc(3.5)<=-0.5)