const express = require ('express');
const pag = require ('./views/todo_app');
const app = express ();
const port = 3000;


app.get ('/', (req, res) => {
    res.send (pag);
}); //servir o template da pag

app.listen (port, () => console.log ('Running'));

