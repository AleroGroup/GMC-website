const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

 // import database configuration
app.use(cors())


const company = require('./routes/company.js');
app.use('/api/company', company);

const wildcard = require('./routes/wildcard.js');
app.use('/api/wildcard', wildcard);


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
