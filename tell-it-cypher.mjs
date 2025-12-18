import { readFile, writeFile } from "fs/promises";

const file = await readFile(process.argv[2]);
const action = process.argv[3];
const filename = process.argv[4];
const outputfile = filename || (action === "encode" ? "cypher.txt" : "clear.txt");
if (action === "encode") {
  await writeFile(outputfile, Buffer.from(file).toString("base64"));
} else if (action === "decode") {
 await writeFile(outputfile, Buffer.from(file.toString(), "base64"));
}
