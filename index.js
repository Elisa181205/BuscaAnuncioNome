
function infoBuscar(){
    const texto = document.getElementById('texto').value;
    const conteudo = document.getElementById('conteudo')
    const DIV0 = document.getElementsByClassName('DIV0')
    let inicio= 50

    const r =texto.replace(" ","%20")
    
    const urlbase = `https://api.mercadolibre.com/sites/MLB/search?q=${r}`;
    const headers ={
        "Content-Type": " application/json"
    }

    fetch(urlbase, {method: "GET".headers})
    .then(base => base.json())
    .then(base => {
        console.log((base.paging.total)/50)
        const page = (base.paging.total)/50

        fetch(urlbase, {method: "GET". headers})
            .then(response => response.json())
            .then(response =>{
                // console.log(response.results)
                console.log(response)
                let anuncios = response.results
        
            for (let x = 0; x < 50; x++) {
                let anuncio = anuncios[x];
              
                let linha = document.createElement("tr");
              
                // let id = document.createElement("td");
                // id.innerHTML = anuncio.id;
                // linha.appendChild(id);
              
                let title = document.createElement("td");
                title.innerHTML = anuncio.title;
                linha.appendChild(title);
        
                let price = document.createElement("td")
                price.innerHTML = "R$ "+ anuncio.price;
                linha.appendChild(price)
        
                let link = document.createElement("td");
                let a = document.createElement("a");
                a.href = anuncio.permalink;
                a.textContent = anuncio.permalink;
                link.appendChild(a);
                linha.appendChild(link);
        
                let seller = document.createElement("td")
                seller.innerHTML=anuncio.seller.nickname;
                linha.appendChild(seller)
        
                let imagem = document.createElement("td")
                imagem.innerHTML = `<img src="${anuncio.thumbnail}">` //anuncio.thumbnail
                linha.appendChild(imagem)
              
                conteudo.appendChild(linha);
              }
              
        
            })
    

        for(controle=0;controle<page;controle++){
            const url = `https://api.mercadolibre.com/sites/MLB/search?q=${r}&offset=${inicio}`;
            console.log(inicio)

            fetch(url, {method: "GET". headers})
            .then(response => response.json())
            .then(response =>{
                // console.log(response.results)
                console.log(response)
                let anuncios = response.results
        
            for (let x = 0; x < 50; x++) {
                let anuncio = anuncios[x];
              
                let linha = document.createElement("tr");
              
                // let id = document.createElement("td");
                // id.innerHTML = anuncio.id;
                // linha.appendChild(id);
              
                let title = document.createElement("td");
                title.innerHTML = anuncio.title;
                linha.appendChild(title);
        
                let price = document.createElement("td")
                price.innerHTML = "R$ "+ anuncio.price;
                linha.appendChild(price)
        
                let link = document.createElement("td");
                let a = document.createElement("a");
                a.href = anuncio.permalink;
                a.textContent = anuncio.permalink;
                link.appendChild(a);
                linha.appendChild(link);
        
                let seller = document.createElement("td")
                seller.innerHTML=anuncio.seller.nickname;
                linha.appendChild(seller)
        
                let imagem = document.createElement("td")
                imagem.innerHTML = `<img src="${anuncio.thumbnail}">` //anuncio.thumbnail
                linha.appendChild(imagem)
              
                conteudo.appendChild(linha);
              }
              
        
            })

            inicio=inicio+50

        }

    })

    
    

}
