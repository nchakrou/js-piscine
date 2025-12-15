import {readFile} from 'fs/promises'

let arch =  await readFile("verydisco.txt")
arch = arch.toString().split(" ")
let res = ""
for (let i = 0; i < arch.length; i++) {
  let mid = Math.floor(arch[i].length / 2);
  if (i != 0){
    res+=" "
  }
  res+=arch[i].slice(mid)+arch[i].slice(0,mid)
}
console.log(res.toString());
