const bodyParser = require('body-parser')

const CreateBodyParser = (app) => ((app.use(bodyParser.urlencoded({ extended: false }))))

module.exports.CreateBodyParser = CreateBodyParser