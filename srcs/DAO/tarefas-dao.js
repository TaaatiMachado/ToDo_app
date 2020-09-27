
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
    };    

    deletaTarefas (id) {
        
        return new Promise ((resolve, reject) => {
            this._db.run(
                `DELETE FROM TAREFAS WHERE id_tarefas = ? `,
                [id], (err) => {
                if(err) {
                    reject(`Erro na deleção: ${err}`);
                } else {
                    resolve();
                }
            
            });
        });
    };  

    addTarefas (titulo, descricao, status){

        return new Promise ((resolve, reject) => {
            this._db.run(
                `INSERT INTO TAREFAS (titulo, descricao, status) VALUES (?, ?, ?)`, 
                [titulo, descricao, status],
                (err) => {
                    if (err) {
                        reject(`Erro na adição de tarefas: ${err}`);
                    } else {
                        resolve ();
                }
            });
        });
    };

    


};

module.exports = TarefasDAO;