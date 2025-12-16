import { readdir, readFile, writeFile } from 'fs/promises'

const arg = process.argv[2]
const files = await readdir(arg)
const guests = []
for (const file of files) {
    const Path = arg+"/"+file
    const content = await readFile(Path, 'utf8')
    const data = JSON.parse(content)
    
    if (data.answer === 'yes') {
        const name = file.split('.')[0]
        const [firstname, lastname] = name.split('_')
        guests.push(`${lastname} ${firstname}`)
    }
}

guests.sort()

const result = guests.map((guest, index) => `${index + 1}. ${guest}`).join('\n')

await writeFile('vip.txt', result)