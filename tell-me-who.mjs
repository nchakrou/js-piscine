import {readdir} from "fs/promises"
 
const path = process.argv[2]
const files = await readdir(path)
files.sort((a,b)=>a.localeCompare(b))
for (let i =0 ;i<files.length;i++){
let res = files[i].split(".")
    const [firstname, lastname] = res[0].split('_')
    console.log(`${i + 1}. ${lastname} ${firstname}`);
}

