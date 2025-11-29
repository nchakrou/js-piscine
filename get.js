function get(src, path) {
  let sp = path.split(".");

  let x = src;
  for (let i = 0; i < sp.length; i++) {
    if (x[sp[i]]===undefined){
        return undefined
    }
    x = x[sp[i]];
  }
  return x;
}