const TarefasDAO = require('../DAO/tarefas-dao');
const newPag = require ('../views/todo_app');

class TarefasController {

    constructor (db) {
        this.tarefasDAO = new TarefasDAO(db)
    }

     homeTarefas() {
        return  (req, resp) => {
            this.tarefasDAO.listaTarefas()
            .then (tarefas => {
                resp.send(newPag(tarefas))
            })
        }
    };

    
    deletaTarefas() {

        return ((req, res) => {
            this.tarefasDAO.deletaTarefas(req.params.id)
                .then(() => res.status(200).send("Tarefa deletada!"))
                .catch(err => console.log(err));
        });
    };

    addTarefas() {

        return ((req, res) => {
            this.tarefasDAO.addTarefas(req.body.tituloTarefa, req.body.descTarefa, req.body.statusTarefa)
                .then(()=>res.redirect('/'))
                .catch((err) => {console.log(err);});
        });
    };
    
}

module.exports = TarefasController;