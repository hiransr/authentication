// import express
const express = require('express');

const { MongoClient } = require('mongodb');

// init express
const app = express();

// init mongo
const uri = "mongodb://localhost:27017/authentication?retryWrites=true&w=majority"

const client = new MongoClient(uri);
await client.connect();

// endpoints
app.get('/', (req, res) => {
    res.send('success');
})

app.get('/welcome/:id', (req, res) => {
    res.send('Welcome ' + req.params.id );
})

app.listen(3000, () => {
    console.log('running on http://localhost:3000');
})