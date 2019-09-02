

/* var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/files');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({
  storage: storage
});

 */

//module.exports = upload;

// import database configuration
const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')

// let mongo = process.env.MONGODB_PASS
let multer = require('multer')
let GridFsStorage = require('multer-gridfs-storage')
let Grid = require('gridfs-stream')
const mongoURI = 'mongodb://alero:oErOZoLW1@ds215988.mlab.com:15988/heroku_jb1kdl7j'
/* 'mongodb+srv://alero:oErOZoLW@cluster0-jsnt7.mongodb.net/userForms?retryWrites=true&w=majority' */
mongoose.connect(mongoURI, {
  useNewUrlParser: true
})
let conn = mongoose.connection


// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: 'uploads'
      };
      resolve(fileInfo);
    });
  }
});
const upload = multer({
  storage
})
module.exports = upload
