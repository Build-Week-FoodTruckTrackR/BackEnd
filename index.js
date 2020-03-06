require('dotenv').config()

const server = require('./server')
const fs = require('fs')
const https = require('https')

const port = process.env.PORT || 4000

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
},server)
.listen(port, () => console.log(`\n *** Listening on port ${port} *** \n`))

// server