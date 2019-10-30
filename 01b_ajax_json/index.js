// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

const url = './data/dados.json'

const req = new XMLHttpRequest();
req.open('GET', url);
req.send();

req.onreadystatechange = pegarDados;

function pegarDados() {
    if (req.readyState === 4) {
        if (req.status === 200) {



            const response = req.response;
            const json = JSON.parse(response);
            console.log(json)
            const data = json.data;
            criarImagens(data);

            const div = document.querySelector('#root');
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                const img = `<img src=${element.imagem}>`;
                div.innerHTML += img
            }
        }
    }
}
           // const body = document.body;
            //div.innerHTML = `
    //<img src=${data[0].imagem}>
    //<img src=${data[1]}>
    //<img src=${data[2]}>
  //  `
//}
        