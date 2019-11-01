//função assíncrona

//function lavalouca() {
//    ensaboar();
//    enxaguar();
//}

//function ensaboar() {
//    console.log('começou a ensaboar');
//    setTimeout(() = {
//        console.log('terminou de ensaboar')
//    }, 5000;
//}

//function enxaguar(params) {
//    console.log('começou a enxaguar');
//    setTimeout(() => {
//        console.log('terminou de enxaguar');

//    }, 2000;
//}
//lavalouca()

function criaTexto(texto) {
    const div = document.querySelector('#root');
    div.innerHTML += `<h1>${texto}</h1>`
}

const sabao = true;
const agua = true;

function ensaboar() {
    return new Promise((resolve, reject) => {
        if (sabao) {
            //criaTexto('comecou a ensaboar');
            setTimeout(() => {
                resolve('terminou de ensaboar');
            }, 5000);
        } else {
            reject('não consigo ensaboar')
        }          

        })
}

function enxaguar() {
    return new Promise((resolve, reject) => {
        if (agua) {
            //criaTexto('começa a enxaguar');
            setTimeout(() => {
                resolve('terminou de enxaguar')
            }, 5000);
        } else{
            setTimeout(() => {
                reject('não consigo enxaguar')
            }, 2000);
        }
    })
}


/*ensaboar()
    .then(res => {
    criaTexto(res)
    enxaguar()
        .then(res2 => criaTexto(res2))
        .catch(err2))
})
.catch(err => criaTexto(err))


ensaboar().then(res => criaTexto(res))
    .then(res => criaTexto(res))
    .catch(err => criaTexto(err))*/

Promise.all([ensaboar(), enxaguar()])
    .then(resAll => resAll.forEach(res =>)))
    .catch(err => console.log(err))