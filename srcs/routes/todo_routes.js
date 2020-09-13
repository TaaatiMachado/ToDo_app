const db = require('../configs/db');
//const TarefasDAO = require ('../DAO/tarefas-dao')
const TarefasController = require ('../controller/tarefas-controller')

//const tarefasDAO = new TarefasDAO();
const tarefasController = new TarefasController(db);

module.exports = (app) => {

    //servir o template da pag        
    app.get ('/', tarefasController.homeTarefas());
    
    
    /*(req, res) => {

            tarefasDAO.listaTarefas()
            .then (tarefas => {
                res.send(newPag(tarefas));
            })

        });
    
}; 
*/
}