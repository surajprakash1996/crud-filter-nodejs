const express = require('express');
const routes = express();
const TaskRoute = require('./tasks.routes');

routes.use('/', TaskRoute);


module.exports = routes;