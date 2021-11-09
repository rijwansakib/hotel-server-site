/**
 * NODEJS API
 * DATABASE MONGODB
 * VERSION 1.0.0
 */
const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config()

// Cross Unblocked File..
const cors = require('cors');

/**
 *  Router File Import
 */
const roomRoutes = require('./route/room');
const orderRoutes = require('./route/orders');

/**
 * MAIN APP CONFIG
 * REPLACE BODY PARSER WITH EXPRESS PARSER
 */
const app = express();
app.use(express.json());
app.use(cors())

/**
 * MAIN BASE ROUTER WITH IMPORTED ROUTES
 */
app.use('/api/rooms', roomRoutes);
app.use('/api/orders', orderRoutes);

/**
 * MAIN BASE GET PATH
 */
app.get('/', (req, res) => {
    res.send('<div style="width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center"><h1 style="color: blueviolet">API RUNNING...</h1><p style="color: lightcoral">rijwan</p></div>')
})
console.log(process.env.DB_PASSWORD);

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yhyzc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => {
        const port = process.env.PORT || 5000;
        app.listen(port, () => console.log(`Server is running at port:${port}`));
        console.log('Connected to mongoDB');

    })
    .catch(err => {
        console.error('Oops! Could not connect to mongoDB Cluster0', err);
    })
