import { readFile, writeFile } from "fs/promises";

const file = readFile(process.argv[2]);
const action = process.argv[3];
const filename = process.argv[3];
const outputfile = filename || (action === "encode" ? "cypher.txt" : "clear.txt");
if (action === "encode") {
  writeFile(outputfile, Buffer.from(file).toString("base64"));
} else if (action === "decode") {
  writeFile(outputfile, Buffer.from(file.toString(), "base64"));
}
