import { readdir } from "fs/promises";

const path = process.argv[2];
const files = await readdir(path);

let rese = [];

for (let i = 0; i < files.length; i++) {
  let res = files[i].split(".");
  const [firstname, lastname] = res[0].split("_");
  rese.push(`${lastname} ${firstname}`);
}
rese.sort();
for (let i = 0; i < rese.length; i++) {
  console.log(`${i + 1}. ${rese[i]}`);
}

