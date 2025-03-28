const express = require('express');
const bodyParser = require('body-parser');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const cors = require('cors'); // Importa el middleware cors

const app = express();
// Configura el middleware cors para permitir solicitudes desde tu aplicación de React
app.use(cors());
app.use(bodyParser.json());

const apikey = process.env.API_KEY;
const url = process.env.URL;

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: apikey,
  }),
  serviceUrl: url,
});



app.post('/synthesize', (req, res) => {
  const {input,voice} = req.body;
  let synthesizeParams = {
    text: input,
    accept: 'audio/mp3',
    voice: voice,
  };

  textToSpeech.synthesize(synthesizeParams)
    .then(response => {
      // Pipe the audio stream directly to the response
      response.result.pipe(res);
    })
    .catch(err => {
      console.log('error:', err);
      res.status(500).send('Error synthesizing text to speech');
    });
});

app.listen(3000, () => {
  console.log('app is running on port 3000');
});


