const express = require('express');
const zod = require('zod');
const {User} = require('./db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('./config');
const rootRouter = require('./routes/index');
app.use(cors());
//app.use(bodyparser.json());
app.use(express.json());



const app = express();

app.use("/api/v1",rootRouter);

app.listen(3000);

