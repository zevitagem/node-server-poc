'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {finder, appender} = require('./service.js');
var data = require ('./data.json');

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

app.get('/users', (req, res) => {
    return res.json(data.users);
});

app.post('/users', (req, res) => {
    let user = req.body;
    
    appender(data, user, 'users');

    return res.json(user);
});

app.get('/users/:id', (req, res) => {
    return res.json(finder(data, 'users', req.params.id));
});

app.get('/roles/:id', (req, res) => {
    return res.json(finder(data, 'roles', req.params.id));
});

app.get('/roles/by_type/:type', (req, res) => {
    return res.json(finder(data, 'roles', req.params.type, 'type'));
});