const viagens = JSON.parse( localStorage.getItem("viagens"))  || []

viagens.forEach(viagem => card(viagem))

function card (viagem){
    const cardviagem = `
    <div>
    <article class="card__article">
    <img src="./assets/images/barco-a-vela.png" alt="image" class="card__img">

    <div class="card__data">
        <h3 class="card__title">Desino: ${viagem.destino} <br>R$ ${viagem.preco} </h3>
        <span class="card__price">${viagem.data} </span>
    </div>

    <img src="./assets/images/tartaruga.jpg" alt="image" class="card__bg">
    
    <button onClick="apagar('${viagem.id}')" type="button"><a href=""> Remover <i class="ri-arrow-right-line"></i></a></button>
    <div>
    
    `
    const card = document.createElement("div")
    card.id = viagem.id
    card.innerHTML = cardviagem
    document.querySelector("#listadeviagens").appendChild(card)
}
/*<a href="./cadastrar.html" class="card__button"> Cadastrar Nova Viagem <i class="ri-arrow-right-line"></i></a>
    <a href="./index.html" class="card__button"> Home <i class="ri-arrow-right-line"></i></a>
    </article>*/

$("#ipt__pesquisa").on("input", function (event){
    /*console.log($(this).val());*/
    var search = $(this).val();

    var busca = $.grep(viagens, function (object){
        return object.name.toLowerCase().includes(search.toLowerCase());
        
    })
    console.log(busca);
})
    