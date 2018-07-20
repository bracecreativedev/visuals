const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.send('My name is George');
    res.end();
});

app.listen(12007, () => console.log('App listening on 12007'));
