
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const tarefasTabela = `CREATE TABLE IF NOT EXISTS Tarefas(
    id_tarefas INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    descricao TEXT,
    status TEXT
  )`;
  
  const inserindoDados = `INSERT INTO Tarefas(titulo, descricao, status)
  VALUES ('FallGuys', 'Todo dia depois da aula', 'To do'),
  ('Resília', 'Todo dia das 13h às 16h', 'Doing'),
  ('Trabalho de casa', 'À noite', 'Done'),
  ('Chill time', 'Fim de semana', 'Doing')`

  ;
  
  db.serialize(()=>{
    
    db.run(tarefasTabela, (err)=>{
      if(err){
        console.log("Erro na criação da tabela");
        process.exit(1);
      }
    });
  
    db.run(inserindoDados, (err)=>{
      if(err){
        console.log("Erro na inserção de dados");
        process.exit(1);
      }
    });
    
  });






/*const TASKS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS TASKS (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(64),
        description TEXT,
        status VARCHAR(32)
    )
`;

const ADD_TASKS = `
    INSERT INTO TASKS (
        title,
        description,
        status
    )
    VALUES 
        ('Yoga', 'Fazer Yoga de segunda a sexta', 'Contínuo'),
        ('Médico', 'Consulta com Dra Camila Assad', 'TODO'),
        ('Pagar Contas', 'Pagar boletos de água e luz', 'DOING')
`;

db.serialize(() => {
	db.run(TASKS_SCHEMA, (err) => {
		if (err) {
			console.log('Erro na criação da tabela de tarefas');
			process.exit(1);
		}
	});
	db.run(ADD_TASKS, (err) => {
		if (err) {
			console.log('Erro ao adicionar entradas ao banco');
			process.exit(1);
		}
	});
});
*/