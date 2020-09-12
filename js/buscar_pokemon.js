let btn_buscar = document.getElementById('btn_buscar')

btn_buscar.addEventListener('click',()=>{
    let campo_de_texto = document.getElementById('campo_de_texto').value
    let img_pokemon = document.getElementById('img_pokemon')
    let nombre_pokemon = document.getElementById('nombre_pokemon')
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${campo_de_texto.toLowerCase()}`)
    xhttp.send()

    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            let respuesta_api=JSON.parse(this.responseText)
            console.log(respuesta_api)
            img_pokemon.setAttribute("src",respuesta_api.sprites.other['official-artwork'].front_default)
            nombre_pokemon.textContent = respuesta_api.name
        }
    }    

})