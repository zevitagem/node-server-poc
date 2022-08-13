'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {finder, appender} = require('./service.js');
var data = require('./data.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.listen(PORT, HOST);
app.use(bodyParser());

console.log(`Running on http://${HOST}:${PORT}`);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/humans', (req, res) => {
    return res.json(data.humans);
});

app.post('/humans', (req, res) => {
    let human = req.body;

    appender(data, human, 'humans');

    return res.json(human);
});

app.get('/humans/:id', (req, res) => {
    return res.json(finder(data, 'humans', req.params.id));
});

app.get('/roles/:id', (req, res) => {
    return res.json(finder(data, 'roles', req.params.id));
});

app.get('/roles/by_type/:type', (req, res) => {
    return res.json(finder(data, 'roles', req.params.type, 'type'));
});
