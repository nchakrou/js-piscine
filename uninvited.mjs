import { writeFile } from "node:fs/promises";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  let body = ''
  req.on('data', chunk => { body += chunk });

  req.on('end', async () => {
    try {
      const path = "./guests" + req.url + ".json"
      await writeFile(path, body, "utf8");
      res.statusCode = 201
      res.end(body);
    } catch (error) {
      res.statusCode = 500
      res.end({ error: "server failed" })
    }
  })
})

server.listen(5000, () => {
  console.log('Server listening on port 5000')
})