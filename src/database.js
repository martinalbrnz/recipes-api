const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URI)
    .then(db => console.log('Database connected'))
    .catch(error => console.error(error));

module.exports = mongoose;


