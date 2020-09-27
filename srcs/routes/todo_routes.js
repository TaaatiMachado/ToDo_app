const { reset } = require('nodemon');
const db = require('../configs/db');
const TarefasController = require ('../controller/tarefas-controller');
const tarefasController = new TarefasController(db);

module.exports = (app) => {

    //servir o template da pag        
    app.get ('/', tarefasController.homeTarefas());
   
    app.delete('/:id', tarefasController.deletaTarefas());

    app.post('/tarefas', tarefasController.addTarefas());


    /*app.delete('/tarefas/:id', (req, resp) => {
        console.log (`Deletei tarefa ${req.params.id}`);
        resp.json({'response': 'ok'});
    });

    app.post('/tarefas', (req, resp) => {
        console.log(`Rota post do form ativada dados: ${req.body.descTarefa}`);
        resp.redirect('/');
    });*/

}