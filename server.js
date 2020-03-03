const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('./operator/authenticate-middleware.js.js');
const operatorRouter = require('./operator/router');
const dinerRouter = require('./diner/router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/operators', operatorRouter)
server.use('/diners', dinerRouter)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(err.httpStatusCode || 500)
        .json({
            message: err.message
        })
})

module.exports = server;