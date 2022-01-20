//  REQUIRE
const { Router } = require('express');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database');

//  SETTINGS
app.set('port', process.env.PORT || 3000)

//  MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//  ROUTES
app.use('/api/recipes', require('./routes/recipes.routes'))

//  STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//  SERVER LAUNCH
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
