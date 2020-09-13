
class TarefasDAO {

    constructor (db) {
        this._db = db;
    }

    listaTarefas () {
        
        return new Promise ((resolve, reject) => {

            this._db.all(`SELECT * FROM TAREFAS`, (err, rows) => {
                if(err) {
                    reject(`Erro na consulta: ${err}`);
                } else {
                    resolve(rows);
                }
            
            });
        });
    }    
}

module.exports = TarefasDAO;