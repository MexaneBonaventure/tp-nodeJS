const { resolve } = require('path');
const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.static(resolve('public')));
app.use(express.json());
app.use(router);

app.set('view engine', 'pug');

module.exports = app;