const inputCep = document.getElementById('inputCep');

const result = document.getElementById('result');

const resultado = document.getElementById('resultado')

inputCep.addEventListener('keypress', () => {
    let inputCepLength = inputCep.value.length;

    if (inputCepLength === 5) {
        inputCep.value += '-'
    }
})

