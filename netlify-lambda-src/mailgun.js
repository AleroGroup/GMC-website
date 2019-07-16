/* eslint-disable no-console */
require('dotenv').config()
const Mailgun = require('mailgun-js')
const { MG_API_KEY: apiKey, MG_DOMAIN: domain, MG_HOST: host } = process.env
const mailgun = Mailgun({
  apiKey,
  domain,
  host
})

// eslint-disable-next-line require-await
const sendEmail = async ({ name, recipient }) => {
  console.log('Sending email')
  return new Promise((resolve, reject) => {
    const mailData = {
      from: 'Great Minds Challenge <noreply@greatmindschallenge.co.ke>',
      to: recipient.toString(),
      subject: `Hello ${name}`,
      html: `<p> Dear Great Mind,

The Great Minds Challenge team is highly honoured by your decision to join the 2019 Challenge under the theme, “Champion by Design.”

Congratulations on starting what will be a lifetime experience. We will tap into your passion for innovation and creativity as we align your purpose for you to be able to achieve your personal goals and your company’s vision and mission in a strategic unique GMC model. 

This world class platform will inspire and challenge you to great lengths. We will network you with some of the best experts to give you a new perception about everything you need to unlearn to develop a new mind set.

We look forward to working closely with you and growing you to join our league of champion. Feel free to contact us any time in case of any questions.

Please, read the following action steps in the document in the link below very carefully as this will inform you sufficiently of the next steps to take.

We can’t wait to  meet you soon. </p>

<h1>What Next?</h1>

<h3>Action step 1</h3>

<p>A Clarity4D link will be sent in your email for you to take an online growth and dev. personality test.</p>

<h3> Action step 2 </h3>
We will send you the APPI CREPESTM Analysis brief that will facilitate you to identify and prioritize on which challenge you will work on and BMC (Business Model Canvas) brief that will guide you to come up with execution strategy for your impact plan.

...read more <a href="https://assets.ctfassets.net/pinw8ucllktt/2fb8LVrohmdNH5oBmxeXGs/393fb75b1e14d83b472f40f354b5d45f/Action_Steps_GMC_2019_2nd_Edition_.pdf"> here </a>

`
    }

    mailgun.messages().send(mailData, (err, res) => {
      console.log(res && res.message ? res.message : res)
      if (err) return reject(err)
      resolve()
    })
  })
}

exports.handler = async event => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(event.body)
    await sendEmail(data)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent!'
      })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message || err
    }
  }
}