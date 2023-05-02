const express = require('express');
const app = express();
const indexRoutes = require('./routes/index.routes');
const { sequelize } = require('./models/index.models');
const path = require('path');

/** Setup view engine */ 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views') );


/** Parse data in json format from client  */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/** Use index routes */ 
app.use(indexRoutes);

/** Sync all models */
sequelize.sync({force:false});

module.exports = app;


