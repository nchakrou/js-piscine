function get(src, path) {
  let sp = path.split(".");

  let x = src;
  for (let i = 0; i < sp.length; i++) {
    x = x[sp[i]];
  }
  return x;
}
