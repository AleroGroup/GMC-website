const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express()
 // import database configuration
app.use(cors())

 // send functions
const company = require('./api/routes/company');
app.use('/api/company', company);

const wildcard = require('./api/routes/wildcard');
app.use('/api/wildcard', wildcard);

const sgMail = require('@sendgrid/mail');


    app.get('/sendmail', (req, res, next) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
     //Get Variables from query string in the search bar
      const { recipient, name } = req.query; 

      //Sendgrid Data Requirements
      const msg = {
      to: recipient, 
      from: 'Great Minds Challenge <noreply@greatmindschallenge.co.ke>',
      subject: `Hello ${name}`,
      html: `<p> Dear Great Mind,`
    }

  //Send Email
  sgMail.send(msg)
  .then((msg) => console.log(text));
});

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {

  app.use(morgan('dev'))
  app.use(bodyParser.json())
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
