let produtos = [
    { nome: "Smartphone", preco: 1500.00, categoria: "Eletrônicos" },
    { nome: "Camiseta Algodão", preco: 59.90, categoria: "Roupas" },
    { nome: "Fone de Ouvido Bluetooth", preco: 250.00, categoria: "Eletrônicos" },
    { nome: "Chocolate Amargo", preco: 12.50, categoria: "Alimentos" },
    { nome: "Notebook Gamer", preco: 4500.00, categoria: "Eletrônicos" }
];

function renderizarCards() {
    let container = document.getElementById("container");
    container.innerHTML = "";

    produtos.forEach(function(produto) {
        let card = document.createElement("div");
        card.classList.add("card");

        if (produto.categoria !== "Eletrônicos") {
            card.classList.add("nao-eletronico");
        }

        card.innerHTML = `
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <span class="categoria">${produto.categoria}</span>
        `;

        container.appendChild(card);
    });
}

function filtrarEletronicos() {
    let cardsNaoEletronicos = document.querySelectorAll(".nao-eletronico");
    
    cardsNaoEletronicos.forEach(function(card) {
        card.classList.toggle("esconder");
    });
}

function limparContainer() {
    produtos = [];
    renderizarCards(); 
}

function adicionarProduto() {
    let nomeInput = document.getElementById("nomeProduto").value;
    let precoInput = Number(document.getElementById("precoProduto").value);
    let categoriaInput = document.getElementById("categoriaProduto").value;

    if (nomeInput === "" || precoInput <= 0) {
        alert("Por favor, preencha o nome e o preço corretamente!");
        return;
    }

    let novoProduto = {
        nome: nomeInput,
        preco: precoInput,
        categoria: categoriaInput
    };

    produtos.push(novoProduto);
    renderizarCards();

    document.getElementById("nomeProduto").value = "";
    document.getElementById("precoProduto").value = "";
}

renderizarCards();