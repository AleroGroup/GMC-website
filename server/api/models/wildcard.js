const mongoose = require('mongoose')

const wildcardSchema = mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
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
p_pic: {
  data: Buffer,
  type: String
},
cv: {
  data: Buffer,
  type: String
},
phone: {
  type: String,
},
listAc: {
  type: String,
},
desc: {
  type: String,

}
})

module.exports = mongoose.model('wildcard', wildcardSchema)
