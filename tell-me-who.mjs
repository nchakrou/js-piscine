import { readdir } from "fs/promises";

const path = process.argv[2];
const files = await readdir(path);
files.sort((a, b) => b.localeCompare(a));
let res = [];
for (let i = 0; i < files.length; i++) {
  let res = files[i].split(".");
  const [firstname, lastname] = res[0].split("_");
  res.push(`${lastname} ${firstname}`);
}
for (let i = 0; i < res.length; i++) {
  console.log(`${i + 1}. ${res[i]}`);
}
