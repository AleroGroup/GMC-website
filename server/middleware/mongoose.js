const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

//'mongodb://alero:oErOZoLW1@ds215988.mlab.com:15988/heroku_jb1kdl7j'
const mongoURI = 'mongodb://alero:22oplog-reader@ds217148-a0.mlab.com:17148,ds217148-a1.mlab.com:17148/heroku_vk8w1qws?replicaSet=rs-ds217148'
mongoose.connect(mongoURI, (err, res) => {
  if (err) {
    console.log('Failed to connected to ' + mongoURI)
  } else {
    console.log('Connected to ' + mongoURI)
  }
})

