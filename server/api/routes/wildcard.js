const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();

const router = express.Router();


//Get the applicants
router.get('/api/wildcard', async (req, res) => {
    const wildcard = await loadWildcardCollection();
    res.send(await wildcard.find({}).toArray());
});

router.post('/api/wildcard', async (req, res) => {
  const wildcard = await loadWildcardCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});


//collections

async function loadWildcardCollection() {
    const url = 'mongodb+srv://'+ process.env.MONGODB_USER + ':' + process.env.MONGODB_PASS+'@cluster0-jsnt7.mongodb.net/test?retryWrites=true&w=majority'
    const client = await mongodb.MongoClient.connect(url, {
        useNewUrlParser: true
    });

    return client.db('userForms').collection('wildcard');
}

module.exports = router;
