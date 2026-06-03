function calcularDesconto() {
    let precoProduto = Number(document.getElementById("inputPreco").value);
    let percentualDesconto = Number(document.getElementById("inputDesconto").value);
    let nome = document.getElementById("inputNome").value;

    let precoMaiorQue100 = precoProduto >= 100;
    let descontoValido = (percentualDesconto >= 0 && percentualDesconto < 100) && precoMaiorQue100;

    let valorDesconto = descontoValido ? (precoProduto * percentualDesconto) / 100 : 0;
    
    let precoFinal = precoProduto - valorDesconto;

    document.getElementById("linha1").textContent = `"Olá, ${nome}! O produto custa R$ ${precoProduto}"`;
    document.getElementById("linha2").textContent = `"Desconto de ${percentualDesconto}%: R$ ${valorDesconto}"`;
    document.getElementById("linha3").textContent = `"Preço final: R$ ${precoFinal}"`;
    document.getElementById("linha4").textContent = `"Preço acima de R$ 100? ${precoMaiorQue100}"`;
    document.getElementById("linha5").textContent = `"Desconto válido? ${descontoValido}"`;

    console.log(`Olá, ${nome}! O produto custa R$ ${precoProduto}`);
    console.log(`Desconto de ${percentualDesconto}%: R$ ${valorDesconto}`);
    console.log(`Preço final: R$ ${precoFinal}`);
    console.log(`Preço acima de R$ 100? ${precoMaiorQue100}`);
    console.log(`Desconto válido? ${descontoValido}`);
}