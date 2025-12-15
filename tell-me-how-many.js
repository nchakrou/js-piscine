import {readdir} from 'fs/promises'
const dirPath = process.argv[2]
try {
    const file = await readdir(dirPath);
    console.log(file.length)
}catch (err){
    console.log(err.message)
}