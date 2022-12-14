const bodyParser = require('./utils/createBodyParser')
const server = require('./utils/createServer')
const mongoDB = require('./utils/createMongoConnect')
const KeyChanger = require('./utils/changeSecretKey')

const telegramBot = require('./telegramBot/main')

const routes = require('./routes/api-routes')

const app = server.start(2001)
bodyParser.CreateBodyParser(app)
let mongoClient = mongoDB.connect()
app.use('/api', routes)
KeyChanger.start
telegramBot.start