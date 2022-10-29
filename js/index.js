const inputCep = document.getElementById('inputCep');

const indexResult = document.getElementById('result');

const btnConsulte = document.getElementById('btnConsulte')

const indexResultado = document.getElementById('resultado')

// inputCep.addEventListener('keypress', () => {
//     let inputCepLength = inputCep.value.length;

//     if (inputCepLength === 5) {
//         inputCep.value += '-'
//     }
// })

document.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        btnConsulte.click()
    }
})
