function textoRandom(){
    $.ajax({
        type: "GET",
        url: "https://api.chucknorris.io/jokes/random",
        dataType: "json",
        success: function(datos){
            var texto = document.getElementById("Random");
            var chiste = datos.value;
            texto.textContent = chiste
        },
        error: function(error) {
            console.log("Esto es un " + error);
        }
    })
}
    
$(document).ready(textoRandom) //declarar función afuera, para usarla después
