const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const port = 5000;

const app = express();

app.use(express.json());

app.listen(port,() => {
    console.log("server is running in port number 5000");
})