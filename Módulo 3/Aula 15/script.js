let formulario = document.getElementById("formularioTarefa");
let inputTarefa = document.getElementById("novaTarefa");
let listaUl = document.getElementById("listaTarefas");
let campoBusca = document.getElementById("campoBusca");

let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarTarefas() {
    listaUl.innerHTML = "";

    tarefasSalvas.forEach(function(tarefa, index) {
        let li = document.createElement("li");
        
        if (tarefa.concluida) {
            li.classList.add("riscada");
        }

        li.innerHTML = `
            <span class="texto-tarefa">${tarefa.texto}</span>
            <button class="btn-remover" data-index="${index}">X</button>
        `;

        listaUl.appendChild(li);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let texto = inputTarefa.value.trim();

    let nova = {
        texto: texto,
        concluida: false
    };

    tarefasSalvas.push(nova);
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
    renderizarTarefas();

    inputTarefa.value = "";
});

listaUl.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-remover")) {
        let index = event.target.getAttribute("data-index");
        tarefasSalvas.splice(index, 1); // Remove do array
        localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
        renderizarTarefas();
    } 
    else if (event.target.classList.contains("texto-tarefa") || event.target.tagName === "LI") {
        let liClicado = event.target.closest("li");
        let botaoX = liClicado.querySelector(".btn-remover");
        let index = botaoX.getAttribute("data-index");

        tarefasSalvas[index].concluida = !tarefasSalvas[index].concluida;
        localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
        renderizarTarefas();
    }
});

campoBusca.addEventListener("input", function() {
    let termoBusca = campoBusca.value.toLowerCase();
    let itens = listaUl.getElementsByTagName("li");

    Array.from(itens).forEach(function(item) {
        let textoTarefa = item.querySelector(".texto-tarefa").textContent.toLowerCase();
        
        if (textoTarefa.includes(termoBusca)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});

renderizarTarefas();