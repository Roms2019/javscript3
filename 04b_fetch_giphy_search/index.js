// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const input = document.querySelector('#gifInput');
const botao = document.querySelector('#giButton');

botao.addEventListener('click', (e) => fazerFetch(e));

function fazerFetch(event) {
    event.preventDefault();
    const valorInput = input.nodeValue;
        console.log('clicou');
    
    fetch('http://api.giphy.com/vl/gifs/search?q=${valorInput}&api key=dc6zaT0xFJmzC&limit=1&offset=0')
    fetch(url)    
        .then(response => response.json()) 
        .then(data => console.log(dado))
    .catch(e => console.error(e))
}

function mostrarResultado(json) {
    const arr = json.data
    arr.forEach(element => {
        const srcImg = element.images.original.url
        
        
}