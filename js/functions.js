// Função que irá verificar se o cep está correto e depois buscar na API o resultado

async function buscarCep() {

    let cepResult = inputCep.value;
    let cep = cepResult.replace(/[^0-9]/g, '')

    if (verificarNumero(cep) == false) {
        result.innerHTML = `DIGITE SOMENTE NÚMEROS`

        resultado.innerHTML = ''
    }
    else if (cep.length < 8) {
        result.innerHTML = `NÃO ENCONTRADO`

        resultado.innerHTML = ''
    }
    else {
        const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resultado.json()

        if (dados.erro) {
            result.innerHTML = 'CEP NÃO EXISTE';

            resultado.innerHTML = '';
        }
        else {
            result.innerHTML = `ENCONTRADO`

        inserirResultados(dados)
        }
        
    }
}

// Função para verificar se o número está correto ou não

function verificarNumero(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Função que inseri resultados caso a busca de certo

function inserirResultados(dados) {
    resultado.innerHTML = `
    <p>Bairro: <span id="bairro"></span></p>
    <p>CEP: <span id="cep"></span></p>
    <p>Complemento: <span id="complemento"></span></p>
    <p>DDD: <span id="ddd"></span></p>
    <p>GIA: <span id="gia"></span></p>
    <p>IBGE: <span id="ibge"></span></p>
    <p>Localidade: <span id="localidade"></span></p>
    <p>Logradouro: <span id="logradouro"></span></p>
    <p>Siafi: <span id="siafi"></span></p>
    <p>UF: <span id="uf"></span></p>
    `

    var indexBairro = document.getElementById('bairro');
    var indexCep = document.getElementById('cep');
    var indexComplemento = document.getElementById('complemento');
    var indexDDD = document.getElementById('ddd');
    var indexGIA = document.getElementById('gia');
    var indexIBGE = document.getElementById('ibge');
    var indexLocalidade = document.getElementById('localidade');
    var indexLogradouro = document.getElementById('logradouro');
    var indexSiafi = document.getElementById('siafi');
    var indexUf = document.getElementById('uf');

    indexBairro.innerHTML = `${dados.bairro}`
    indexCep.innerHTML = `${dados.cep}`
    indexComplemento.innerHTML = `${dados.complemento}`
    indexDDD.innerHTML = `${dados.ddd}`
    indexGIA.innerHTML = `${dados.gia}`
    indexIBGE.innerHTML = `${dados.ibge}`
    indexLocalidade.innerHTML = `${dados.localidade}`
    indexLogradouro.innerHTML = `${dados.logradouro}`
    indexSiafi.innerHTML = `${dados.siafi}`
    indexUf.innerHTML = `${dados.uf}`
}