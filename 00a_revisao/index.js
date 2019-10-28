// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

//console.log('olar');

//const body = document.querySelector('body');
const body = document.body;
//console.log(body);

//body.style.backgroundColor = 'purple'



//const n = Math.random();
//const n2 = n * 255;
 //const int = parseInt(n2);

//console.log('numero', n);
//console.log('número2', n2);
//console.log('int:', int);

constbotao.addEventListener('click')

//const intRandom = parseInt(Math.random() * 255)
//console.log(intRandom)
//botao.addEventListener('click', clicouBotao);

//function cliclouBotao() {
   // const intRandom = parseInt(Math.random() * 255)
   // const r = parseInt(Math.random() * 255);
   // const g = parseInt(Math.random() * 255);
   // const b = parseInt(Math.random() * 255);

    //body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    //console.log('rgb(' + r + ',' + b + ',)');
    //console.log(r,g,b)
//}


//const botao = document.getElementById('trocaCor');
//botao.addEventListener('click', clicouBotao);


//function clicouBotao() {
//    console.log('entrei na função');
//}

function geraInteiro() {
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    body.style.backgroundColor = 'rgb(' + r + ',' g + ',' + b + ')'

}
