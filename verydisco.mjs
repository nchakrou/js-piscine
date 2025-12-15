let arch = process.argv[2];

arch = arch.split(" ");

let res = "";
for (let i = 0; i < arch.length; i++) {
  let mid = Math.ceil(arch[i].length / 2);
  if (i != 0) {
    res += " ";
  }
  res += arch[i].slice(mid) + arch[i].slice(0, mid);
}
console.log(res);
