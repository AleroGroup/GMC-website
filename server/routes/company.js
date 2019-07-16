const express = require('express');
const mongodb = require('mongodb');


const router = express.Router();


//Get the post ( companyform )
router.get('/company', async (req, res) => {
    const company = await loadCompanyCollection();
    res.send(await company.find({}).toArray());
});


//collections

async function loadCompanyCollection() {
    const url = 'mongodb+srv://'+ process.env.MONGODB_USER + ':' + process.env.MONGODB_PASS+'@cluster0-jsnt7.mongodb.net/test?retryWrites=true&w=majority'
    const client = await mongodb.MongoClient.connect(url, {
        useNewUrlParser: true
    });

    return client.db('userForms').collection('wildcard');
}

module.exports = router;