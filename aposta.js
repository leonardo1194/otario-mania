const formSaldo = document.getElementById('form-saldo')
const formAposta = document.getElementById('form-aposta')
let resultadoAposta = false
let valorApostaAtual = 0
let quantidadeAposta = 0
let vitorias = 0
let derrotas = 0
let ganhos = 0
let num1 = 0
let num2 = 0

saldoAtual = 0
investimentoAtual = 0

formSaldo.addEventListener('submit', function(event) {
    event.preventDefault()

    adicionaFundos()
    exibeFundos()
})

function adicionaFundos() {
    let inputSaldo = parseFloat(document.getElementById('add-saldo').value)

    if (inputSaldo === 0) {
        alert('Não pode adicionar zero, otário!')        
    } else if (inputSaldo < 0) {
        alert('Não pode adicionar números negativos, otário!')
    } else {
        saldoAtual += inputSaldo
        investimentoAtual += inputSaldo
    }
}

function exibeFundos() {
    const exibeSaldo = document.getElementById('exibe-saldo')
    const exibeInvestimento = document.getElementById('exibe-investimento')

    exibeSaldo.innerHTML = saldoAtual.toFixed(2)
    exibeInvestimento.innerHTML = investimentoAtual.toFixed(2)
}

formAposta.addEventListener('submit', function(event) {
    event.preventDefault()

    realizaAposta()
    exibeFundos()
})

function realizaAposta() {
    let inputValorAposta = parseFloat(document.getElementById('input-aposta').value)
    valorApostaAtual = inputValorAposta

    if (inputValorAposta === 0) {
        alert('Não pode apostar zero, otário!')
    } else if (inputValorAposta <= 0) {
        alert('Não pode apostar com números negativos, burro!')
    } else if (inputValorAposta > saldoAtual) {
        alert('Não pode apostar mais do que tem, ladrão!')
    } else {
        num1 = Math.random()

        if (num1 <= 0.5) {
            resultadoAposta = true
        } else {
            resultadoAposta = false
        }
        
        contaAposta()
        exibeResultadoAposta()
    }
}

function exibeResultadoAposta() {
    const h3Ganhou = '<h3 class="ganhou">Ganhou!</h3>'
    const h3Perdeu = '<h3 class="perdeu">Perdeu</h3>'

    document.getElementById('resultado').innerHTML = resultadoAposta === true ? h3Ganhou : h3Perdeu
    document.getElementById('resultado').innerHTML += `<p>Total ganho no jogo: ${ganhos.toFixed(2)}</p>`
    //document.getElementById('resultado').innerHTML += `<p>${num1}, ${num2}</p>`
    //document.getElementById('resultado').innerHTML += `<p>${resultadoAposta}</p>`
}

function contaAposta() {
    
    if (resultadoAposta === false) {
        derrotas += 1
        saldoAtual -= valorApostaAtual
        ganhos -= valorApostaAtual
    } else {
        vitorias += 1
        saldoAtual += valorApostaAtual
        ganhos += valorApostaAtual
    }

    quantidadeAposta += 1
}

