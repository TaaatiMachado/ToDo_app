function newPag(tarefa) {
    
    let cardsTarefas = '';
    
    tarefa.forEach (tarefa => {
        
    cardsTarefas += 
    `<div class="card m-5" style="width: 18rem;" data-id-tarefa="${tarefa.id_tarefas}">
      <div class="card-body">
        <h5 class="card-title">${tarefa.titulo}</h5>
        <p class="card-text">${tarefa.descricao}</p>
        <p class= "card-text">${tarefa.status}</p>
      </div>
      <div class="m-3 d-flex justify-content-end">
        <button type="button" class="btn btn-secondary btn-sm mr-1">Editar</button>
        <button type="button" class="btn btn-secondary btn-danger" onclick="deletaTarefa(event)">Deletar</button>
      </div>
    </div>`
    
    });

    return `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="nav bg-dark mb-4" style="text-align: center;">
        <h1 class=" py-2 text-light" style="font-family: 'Indie Flower'; width:100%">TODO app</h1>
    </nav>
    <div class="d-flex justify-content-center">
        <div class="w-50 p-4 border rounded shadow-sm"> 
            <form class="flex-fill" action='/tarefas' method='post'>
                <div class="form-group">
                    <label for="tituloTarefa"><b>Título:</b></label>
                    <input name="tituloTarefa" type="text" class="form-control" id="tituloTarefa" placeholder="Título da tarefa">
                </div>
                <div class="form-group">
                    <label for="descricaoTarefa"><b>Descrição:</b></label>
                    <textarea name="descTarefa" class="form-control" id="descricaoTarefa" rows="3" placeholder="Insira a descrição da tarefa"></textarea>
                </div>
                <div class="form-group">
                <label for="statusTarefa"><b>Status</b></label>
                <input type="text" name="statusTarefa" class="form-control" id="statusTarefa" placeholder="Status da Tarefa">               
                </div>
                <button type="submit" class="btn btn-secondary btn-sm">Adicionar tarefa</button>
            </form>
        </div>
    </div>
    <div id="todoCard" class="d-flex mt justify-content-around">
        <!-- Aqui entram os cards de TODO!-->
        ${cardsTarefas}
    </div>
    <script src="/static/deleta-tarefas.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`;

    };


module.exports = newPag;