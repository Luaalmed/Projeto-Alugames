function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard_item_img');
    let botao = gameClicado.querySelector('.dashboard_item_img');
    
    if (imagem.classList.contains('dashboard_item_img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
    }
}
