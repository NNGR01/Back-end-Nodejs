// const express = require('express');

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import router from './routes/app';

// db
import pool from './settings/db';

const app = express();

const corsOptions = {
    origin: 'http://example.com',
    optionSuccessStatus : 200
}

app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(cors()); 

// routes
app.use('/api',cors(corsOptions), router);

//public
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), () => {
    console.log('server on port : ', app.get('port'))
});