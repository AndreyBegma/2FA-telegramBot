const express = require('express')
const http = require('http') 

let serverStart = (port) => { 
     const app = express()
     const server = http.createServer(app)
     server.listen(port, async() => { 
          console.log('Server start in port ' + port)
     })
     
     return app
}

module.exports.start = serverStart