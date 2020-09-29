let btn_buscar = document.getElementById('btn_buscar')

btn_buscar.addEventListener('click',()=>{
    let campo_de_texto = document.getElementById('campo_de_texto').value
    let img_pokemon = document.getElementById('img_pokemon')
    let nombre_pokemon = document.getElementById('nombre_pokemon')
    let altura_pokemon = document.getElementById('altura_pokemon')
    let peso_pokemon = document.getElementById('peso_pokemon')
    let tipo_pokemon = document.getElementById('tipo_pokemon')
    let base_exp_pokemon = document.getElementById('base_exp_pokemon')
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${campo_de_texto.toLowerCase()}`)
    xhttp.send()

    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            let respuesta_api=JSON.parse(this.responseText)
            //console.log(respuesta_api)
            img_pokemon.setAttribute("src",respuesta_api.sprites.other['official-artwork'].front_default)
            nombre_pokemon.textContent = respuesta_api.name
            altura_pokemon.textContent = respuesta_api.height
            peso_pokemon.textContent = respuesta_api.weight
            base_exp_pokemon.textContent = respuesta_api.base_experience
            tipo_pokemon.textContent = respuesta_api.types['0'].type.name
        }
    }    

})