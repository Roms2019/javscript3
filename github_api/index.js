//documentação da api do github https://developer.github.com/v3/
//requisição na api pela url https:api.github.com
//fazer GET na rota /users com seu user ex: get em https://api.github.com/users/roms2019

//console.log('ola');
const url = 'http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=1&offset=0'
// 'https://api.github.com/users/roms2019'    
async function buscaApi(url) {
    const response = await fetch(url);
    if (response.ok) {
        const json = await response.json();
        criarImagem(json.data);
  
    }
//        .then(response => response.json())
//        .then(json => criarImagem(json.data))
//        .catch(erro => console.error(erro))
}
function criarImagem(lista) {
    document.body.innerHTML = `
    <img src=${lista[0].images}`
   
    } else {
    console.log(response.statusText);
    
    console.error('não foi possível receber o resultado da api')
    document.body.innerHTML = `<h1 style="color:red">${response.statusText}<h1>`
}
} catch (error)


buscarApi(url).catch(err => console.error(err))