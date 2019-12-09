const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    authRoute = require('./routes/auth'),
    postsRoute = require('./routes/posts'),
    cors = require('cors');

dotenv.config();

//Connect to DB
console.log('process.env.DB_CONNECT', process.env.DB_CONNECT)
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, }, () => console.log('Connected to db.'));

//Use middlewares.
app.use(express.json());
app.use(cors());
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

var server = app.listen(port);


console.log('Restful API server started on: ' + port);
module.exports = server;