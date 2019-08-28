const mongoose = require('mongoose')

const wildcardSchema = mongoose.Schema({
surname: {
  type: String,
},
names: {
  type: String,
},
dob: {
  type: String,
},
noc: {
  type: String,
},
jobPosition: {
  type: String,
},
email: {
  type: String,
},
cloudImage: {
    type: String
  },
cloudFile: {
  type: String,
  required: true
},
phone: {
  type: String,
},
listAc: {
  type: String,
},
desc: {
  type: String,
},
personId: {
  type: String
},
post_date: {
  type: Date,
  default: Date.now
}
})

module.exports = mongoose.model('wildcard', wildcardSchema)
