require('dotenv').config('')
const express= require("express")
const client = require ("twilio")(process.env.accountSid, process.env.authToken)

const app = express()
const port= 3001

app.get ('/', (req, res) => {
    sendTextMessage ()
});

app.listen(port, ()=> {
    console.log(`Listening at http://localhost:${port}`)
});

function sendTextMessage () {
    client.messages.create({
        body:"Your message here",
        to: '',
        from: `${process.env.senderPhone}`
    }).then(message =>console.log(message))
    .catch(error => console.log(error))
}