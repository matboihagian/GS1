document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    const form = document.querySelector("form")

    const viagem = {
        id: "id_" + new Date().getTime(),
        destino: form.destino.value,
        preco: form.preco.value,
        data: form.data.value
        
    }

    validar(viagem)
    salvar(viagem)

})

function salvar (viagem) {
    const viagens = JSON.parse( localStorage.getItem("viagens") ) || []
    viagens.push(viagem)
    localStorage.setItem("viagens", JSON.stringify(viagens))
    window.location.href = "index.html"
}

function validar(viagem){
    limparErros()

    if (viagem.destino.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "o destino é obrigatório"
    }

    if (viagem.preco <= 0){
        document.querySelector("#preco").classList.add("is-error")
        document.querySelector("#preco-erro").innerText = "Quem me dera se o preco fosse menor que zero mas nao é"
    }
}

function limparErros(){
    const campos = document
                .querySelectorAll("input.is-error, textarea.is-error")

    campos
        .forEach(input => input.classList.remove("is-error") )

    document.querySelectorAll(".field span")
            .forEach( span => span.innerText = "")

    
}

