const express = require ('express');
const routes = require ('./srcs/routes/todo_routes.js')

const app = express ();
const port = 3000;

routes (app);

app.listen (port, () => console.log ('Running'));

module.exports = app;
