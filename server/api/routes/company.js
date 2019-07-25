//this is the form for the company
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const Company = require('../models/company')


//GET the form by id
 const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'video/mp4') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});


router.get('/:comapanyId', (req, res, next) => {
    const id = req.params.comapanyId;
    Company.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});


//GET all forms
 router.get('/', (req, res, next) => {
     Company.find().exec().then(docs => {
         console.log(docs);
         res.status(200).json(docs);
     }).catch(error => {
         console.log(error);
         res.status(500).json({
             error: err
         });
     });
 });

//POST
router.post('/post',upload.single('ppic'), (req, res, next) => {
    const company = new Company({
        _id: new mongoose.Types.ObjectId(),
        surname: req.body.surname ,
        names: req.body.names,
        dob: req.body.dob,
        noc:req.body.noc,
        jobPosition:req.body.jobPosition,
        email: req.body.email,
        phone: req.body.phone,
        listAc:req.body.listAc,
        desc: req.body.desc,
        ppic: req.file.path
    })
    company
    .save()
    .then(result => {
    console.log(result);
    res.status(201).json({
 message: 'wildcard registered successfully'
}).catch(error => {
    console.log(error)
    res.status(500).json({
      error: err
})
})
})
});

//UPDATE

module.exports = router;
