//main connection to the DB
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const url =
  'mongodb+srv://superUser:' +
  process.env.MONGODB_PASS +
  '@cluster0-jsnt7.mongodb.net/test?retryWrites=true&w=majority'

const connect = mongoose.connect(url, { useNewUrlParser: true })

module.exports = connect
