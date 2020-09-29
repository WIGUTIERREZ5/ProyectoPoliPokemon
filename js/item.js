let btn_buscar = document.getElementById('btn_buscar')

btn_buscar.addEventListener('click',()=>{
    let campo_de_texto = document.getElementById('campo_de_texto').value
    let name_item = document.getElementById('name_item')
    let category = document.getElementById('category')
    let effect = document.getElementById('effect')
    let short_effect = document.getElementById('short_effect')
    let text = document.getElementById('text')
    let img_item = document.getElementById('img_item')    
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/item/${campo_de_texto.toLowerCase()}`)
    xhttp.send()

    xhttp.onreadystatechange=function() {
        if(this.readyState==4 && this.status==200){
            let respuesta_api=JSON.parse(this.responseText)
            console.log(respuesta_api) 
            img_item.setAttribute("src",respuesta_api.sprites.default)           
            name_item.textContent = respuesta_api.name
            category.textContent = respuesta_api.category.name
            effect.textContent = respuesta_api.effect_entries['0'].effect
            short_effect.textContent = respuesta_api.effect_entries['0'].short_effect
            text.textContent = respuesta_api.flavor_text_entries['34'].text            
            
        }
    }    

})