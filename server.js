const express = require ('express');
const routes = require ('./srcs/routes/todo_routes.js')
const bodyParser = require('body-parser')

const app = express ();
const port = 3000;

app.use('/static', express.static(__dirname + '/srcs/public'));
app.use(bodyParser.urlencoded({extended: true}));

routes (app);

app.listen (port, () => console.log ('Running'));

module.exports = app;
