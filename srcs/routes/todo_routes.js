const newPag = require ('../views/todo_app');
//const todo = require ('../views/todo_tb')

const db = [
    { nome: 'Lucio', tarefa: [{titulo: 'Yoga', 'descricao': 'Yoga segunda e quarta'}]},
    { nome: 'Jussara', tarefa: [{titulo: 'Musculação', 'descricao': 'Malhar todo dia'}]},
    { nome: 'Tati', tarefa: [{titulo: 'Resilia', 'descricao': 'Aulas das 13h às 16h'}, {titulo: 'Dever de casa', 'descricao': 'Cumprir as tarefas todo dia'}]}
];

module.exports = (app) => {
        
    app.get ('/:nome', (req, resp) => {
        for (let i=0; i<db.length; i++) {
            if (req.params.nome == db[i].nome) {     
                resp.send (newPag (db[i].tarefa));
            }
    }
    
    resp.send(newPag(db[1].tarefa));
    
}); //servir o template da pag

    app.get ('/testenodemon', (req, res) => {
        resp.send ('<h1>Rota nodemon sendo testada</h1>');
    }); //teste nodemon
};