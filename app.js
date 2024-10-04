function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);

    let imagem = gameClicado.querySelector('.dashboard_item_img');
    let botao = gameClicado.querySelector('.dashboard_item_img');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    alert(nomeJogo.textContent);
}
