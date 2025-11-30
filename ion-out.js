function ionOut(str) {
  let res = [];
  let r = /(\w*?t)ion/g;
  let sp = str.match(r) || [];
  for (let i = 0; i < sp.length; i++) {
    res.push(sp[i].replace(/tion/, "t"));
  }
  return res;
}
