// standard configuration of the server.js
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = 3001; 
const app = express();


// app.use for express middleware

//More middleware for pasing the JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));
// Get route for the landing page of notetaker (all one page)
app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res)=>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
console.log(`👂 at http://localhost:${PORT} ✅`)
);