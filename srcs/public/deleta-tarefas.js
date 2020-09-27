
function deletaTarefa(event) {
    
    const fetch_id = event.target.parentNode.parentNode.dataset.idTarefa;

    fetch(`http://localhost:3000/${fetch_id}`, { method: "DELETE" })
        .then(() => { event.target.parentNode.parentNode.remove() })
        .catch(err => console.log(err));



    //console.log('Tarefa deletada!');
    //console.log(`id da tarefa: ${event.target.parentNode.parentNode.dataset.idTarefa}`);


}