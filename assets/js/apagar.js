function apagar (id){
    const viagens = JSON.parse(localStorage.getItem("viagens")) || []
    const viagensatualizadas = viagens.filter( viagem => viagem.id != id )
    localStorage.setItem("viagens", JSON.stringify(viagensatualizadas))

    document.querySelector("#"+ id).remove()
}
