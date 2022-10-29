// Função que irá verificar se o cep está correto e depois buscar na API o resultado

async function buscarCep() {

    let cep = inputCep.value;

    if (verificarNumero(cep) == false) {
        indexResult.innerHTML = `DIGITE SOMENTE NÚMEROS`

        indexResultado.innerHTML = ''
    }
    else if (cep.length < 8) {
        indexResult.innerHTML = `CEP INVALIDO`

        indexResultado.innerHTML = ''
    }
    else {
        indexResultado.innerHTML = '<div class="loader"></div>'

        inputCep.value = ''

        const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var dados = await resultado.json()

        if (dados.erro) {

            indexResultado.innerHTML = '';

            indexResult.innerHTML = 'CEP NÃO EXISTE';
        }
        else {
            indexResult.innerHTML = `ENCONTRADO`

            verificarNulos(dados)

            inserirResultados(dados, cep)
        }

    }
}

// Função para verificar se o número está correto ou não

function verificarNumero(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// Função que inseri resultados caso a busca de certo

function inserirResultados(dados, cep) {
    indexResultado.innerHTML = `
    <table>
                <tr>
                    <th colspan="3">ENDEREÇO:</th>
                </tr>

                <tr>
                    <td colspan="3">
                        <p class="tituloInformacao">Logradouro:</p>
                        <span class="informacao">${dados.logradouro}</span>
                    </td>
                </tr>
                

                <tr>
                    <td colspan="3">
                        <p class="tituloInformacao">Bairro:</p>
                        <span class="informacao">${dados.bairro}</span>
                    </td>
                </tr>

                <tr>
                    <td colspan="3">
                        <p class="tituloInformacao">Complemento:</p>
                        <span class="informacao">${dados.complemento}</span>
                    </td>
                </tr>

                <tr>
                    <td colspan="3">
                        <p class="tituloInformacao">Cidade:</p>
                        <span class="informacao">${dados.localidade}</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p class="tituloInformacao">DDD:</p>
                        <span class="informacao">${dados.ddd}</span>
                    </td>

                    <td>
                        <p class="tituloInformacao">UF:</p>
                        <span class="informacao">${dados.uf}</span>
                    </td>

                    <td>
                        <p class="tituloInformacao">CEP:</p>
                        <span class="informacao">${dados.cep}</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p class="tituloInformacao">IBGE:</p>
                        <span class="informacao">${dados.ibge}</span>
                    </td>

                    <td>
                        <p class="tituloInformacao">GIA:</p>
                        <span class="informacao">${dados.gia}</span>
                    </td>

                    <td>
                        <p class="tituloInformacao">SIAFI:</p>
                        <span class="informacao">${dados.siafi}</span>
                    </td>
                </tr>
            </table>
    `
}

function verificarNulos(dados) {
    if (dados.logradouro == '') {
        dados.logradouro = 'nulo'
    }
    if (dados.bairro == '') {
        dados.bairro = 'nulo'
    }
    if (dados.complemento == '') {
        dados.complemento = 'nulo'
    }
    if (dados.localidade == '') {
        dados.localidade = 'nulo'
    }
    if (dados.ddd == '') {
        dados.ddd = 'nulo'
    }
    if (dados.uf == '') {
        dados.uf = 'nulo'
    }
    if (dados.cep == '') {
        dados.cep = 'nulo'
    }
    if (dados.ibge == '') {
        dados.ibge = 'nulo'
    }
    if (dados.gia == '') {
        dados.gia = 'nulo'
    }
    if (dados.siafi == '') {
        dados.siafi = 'nulo'
    }
}