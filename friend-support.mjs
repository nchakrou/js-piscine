import http from 'node:http'
import { readFile } from 'node:fs/promises'

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const path = `./guests/${req.url}.json`
    const content = await readFile(path)
    res.statusCode = 200
    res.end(content)
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.statusCode = 404
      res.end(JSON.stringify({ error: 'guest not found' }))
    } else {
      res.statusCode = 500
      res.end(JSON.stringify({ error: 'server failed' }))
    }
  }
})

server.listen(5000, () => {
  console.log('Server listening on port 5000')
})