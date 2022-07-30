const bodyParser = require('./utils/createBodyParser')
const server = require('./utils/createServer')

const app = server.start(2001)
bodyParser.CreateBodyParser(app)
