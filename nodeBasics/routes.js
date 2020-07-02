const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method

if (url === '/'){

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<body>')
  res.write('<form action="/message" method="POST"> <input type="text" name="message"><button type="submit">submit</button></form>')
  res.write('</body>')
  res.write('</html>')

  return res.end()
}

if (url === '/message' && method === 'POST'){

  const body = []

  req.on('data', (chunk) => {
    body.push(chunk)
    console.log(body)
  })

  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString()
    console.log(parsedBody)
    const message = parsedBody.split('=')[1]
    fs.writeFileSync('message.txt', message, err => {
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })

  })

}

res.setHeader('Content-Type', 'text/html')
res.write('<html>')
res.write('<body>')
res.write('<h1>Geting back</h1>')
res.write('</body>')
res.write('</html>')
}


module.exports = requestHandler
