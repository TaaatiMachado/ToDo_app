const TarefasDAO = require('../DAO/tarefas-dao')
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
    }
}

module.exports = TarefasController;