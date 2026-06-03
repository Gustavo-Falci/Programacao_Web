function somar(a, b) {
    return a + b;
}

function calcularDesconto(preco, percentual) {
    return preco - (preco * percentual) / 100;
}

module.exports = {
    somar,
    calcularDesconto
};