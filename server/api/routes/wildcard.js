//this is the form for the company
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Wildcard = require('../models/wildcard')

//GET the form by id

router.get('/:wildcardId', (req, res, next) => {
    const id = req.params.wildcardId;
    Wildcard.findById(id)
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
     Wildcard.find().exec().then(docs => {
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
router.post('/post', (req, res, next) => {
    const wildcard = new Wildcard({
        _id: new mongoose.Types.ObjectId(),
        surname: req.body.surname ,
        givenNames: req.body.givenNames,
        dob: req.body.dob,
        noc:req.body.noc,
        jobTitle:req.body.jobTitle,
        email: req.body.email,
        phone: req.body.phone,
        listAc:req.body.listAc,
        desc: req.body.desc
    })
    wildcard.save().then(result => {
        console.log(result);
        res.status(201).json({
     message: 'wildcard registered successfully'
        });
    }).catch(error => {
        console.log(error)
        res.status(500).json({
          error: err
    })
})
})

//UPDATE

module.exports = router;
