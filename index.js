const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    const transcript = require('./public/transcripts/test.json');
    console.log(transcript.text[0]);
    res.render('index.pug', { text: transcript.text });
});

app.listen(process.env.PORT || 1337, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT || 1337}`);
});
