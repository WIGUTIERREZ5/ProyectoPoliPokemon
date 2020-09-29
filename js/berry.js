let btn_buscar = document.getElementById('btn_buscar')

btn_buscar.addEventListener('click',()=>{
    let campo_de_texto = document.getElementById('campo_de_texto').value
    let name_berry = document.getElementById('name_berry')
    let natural_gift_power = document.getElementById('natural_gift_power')
    let natural_gift_type = document.getElementById('natural_gift_type')
    let size = document.getElementById('size')
    let smoothness = document.getElementById('smoothness')
    let soil_dryness = document.getElementById('soil_dryness')    
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/berry/${campo_de_texto.toLowerCase()}`)
    xhttp.send()

    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            let respuesta_api=JSON.parse(this.responseText)
            console.log(respuesta_api)            
            name_berry.textContent = respuesta_api.name
            natural_gift_power.textContent = respuesta_api.natural_gift_power
            natural_gift_type.textContent = respuesta_api.natural_gift_type.name
            size.textContent = respuesta_api.size
            smoothness.textContent = respuesta_api.smoothness
            soil_dryness.textContent = respuesta_api.soil_dryness
            //tipo_pokemon.textContent = 'Tipo: '+respuesta_api.abilities['0'].ability.name
            
        }
    }    

})