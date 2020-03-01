const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('./operator/authenticate-middleware.js.js');
// const operatorRouter = require('./operator/router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/operator', operatorRouter)
// server.use('/api/auth', authRouter);
// server.use('/api/jokes', authenticate, jokesRouter);

server.use((err, req, res, next) => {
    console.log(err)
    res.status(err.httpStatusCode || 500)
        .json({
            message: err.message
        })
})

module.exports = server;