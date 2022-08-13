// import required packages for this app
const express = require('express');
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;