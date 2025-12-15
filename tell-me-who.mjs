import {readdir} from "fs/promises"
 
const path = process.argv[2]
const files = await readdir(path)
for (let i =0 ;i<files.length;i++){
let res = files[i].split(".")
    console.log(res[0]);
}
