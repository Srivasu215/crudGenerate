import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { router as routerImageUpload } from "./src/routes/{{sample}}Route.js";

import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7016');

app.use(cookieParser());

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')))

app.get('/', (req, res) => {
    res.json("kkhhhhhhh")
});

app.get('/k1', (req, res) => {
    // StartFuncKLowDb().then();
    res.json("k1");
});

app.use('/test', routerImageUpload);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);
