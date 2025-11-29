function ceil(n) {
if ((n>0)&&n-trunc(n)!==0){
  return trunc(n)+1
}
return trunc(n)
}


function floor(n) {
if ((n<0)&&n-trunc(n)!==0){
  return trunc(n)-1
}
return trunc(n)
  
}


function round(n) {
  let f = n-trunc(n)
 if (n<0){
  if (f<=-0.5){
  return trunc(n)-1
 }
 }
 if (f===0){
  return n
 }
 if (f<=0.5){
  return trunc(n)
 }
 return trunc(n)+1
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

