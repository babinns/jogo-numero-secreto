const menorValor = 10;
const maiorValor = 100;
const numeroSecreto = gerarNumero();
console.log(numeroSecreto)

function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor