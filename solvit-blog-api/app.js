const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;
