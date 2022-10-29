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
                        <p>Logradouro:</p>
                        <span>${dados.logradouro}</span>
                    </td>
                </tr>
                

                <tr>
                    <td colspan="3">
                        <p>Bairro:</p>
                        <span>${dados.bairro}</span>
                    </td>
                </tr>

                <tr>
                    <td colspan="3">
                        <p>Complemento:</p>
                        <span>${dados.complemento}</span>
                    </td>
                </tr>

                <tr>
                    <td colspan="3">
                        <p>Cidade:</p>
                        <span>${dados.localidade}</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>DDD:</p>
                        <span>${dados.ddd}</span>
                    </td>

                    <td>
                        <p>UF:</p>
                        <span>${dados.uf}</span>
                    </td>

                    <td>
                        <p>CEP:</p>
                        <span>${dados.cep}</span>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>IBGE:</p>
                        <span>${dados.ibge}</span>
                    </td>

                    <td>
                        <p>GIA:</p>
                        <span>${dados.gia}</span>
                    </td>

                    <td>
                        <p>SIAFI:</p>
                        <span>${dados.siafi}</span>
                    </td>
                </tr>

                <tr>
                    <td colspan="3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117168.74493186254!2d-47.70936226379985!3d-23.40545724992264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5e6bcb072354f%3A0x420530adb99e9506!2sIper%C3%B3%20-%20SP%2C%20${cep}!5e0!3m2!1spt-BR!2sbr!4v1667067120276!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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