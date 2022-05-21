const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid = 'ACab2a361ba579f091288b02d6d753009b';
const authToken = '3d8eaede6db9530ace7168e8e55e2b02'; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+18787686086' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))