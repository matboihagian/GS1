var viagens = [];
$("#ipt__pesquisa").on("input", function (event){
    /*console.log($(this).val());*/
    var search = $(this).val();

    var filterText = $.grep(viagens, function(object){
        return object.name.toLowerCase().includes(search.toLowerCase());

    })

    console.log(filterText);
})

