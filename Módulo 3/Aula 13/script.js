function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

function gerenciarAlunos() {
    let listaAlunos = [
        { nome: "Lucas", nota1: 8.0, nota2: 7.5 },
        { nome: "Ana", nota1: 5.0, nota2: 4.5 },
        { nome: "Pedro", nota1: 9.0, nota2: 9.5 },
        { nome: "Mariana", nota1: 6.0, nota2: 6.5 },
        { nome: "Carlos", nota1: 4.0, nota2: 5.5 }
    ];

    listaAlunos.map(function(aluno) {
        aluno.media = calcularMedia(aluno.nota1, aluno.nota2);
    });

    listaAlunos.sort(function(a, b) {
        return b.media - a.media;
    });

    let aprovados = listaAlunos.filter(function(aluno) {
        return aluno.media >= 6;
    });

    let reprovados = listaAlunos.filter(function(aluno) {
        return aluno.media < 6;
    });

    let somaMedias = listaAlunos.reduce(function(acumulador, aluno) {
        return acumulador + aluno.media;
    }, 0);
    let mediaGeralTurma = somaMedias / listaAlunos.length;

    console.log(`--- RELATÓRIO DA TURMA ---`);
    console.log(`Média Geral da Turma: ${mediaGeralTurma.toFixed(1)}`);
    
    console.log(`\n[Aprovados]:`);
    aprovados.map(function(aluno) {
        console.log(`- ${aluno.nome} | Média: ${aluno.media.toFixed(1)}`);
    });

    console.log(`\n[Reprovados]:`);
    reprovados.map(function(aluno) {
        console.log(`- ${aluno.nome} | Média: ${aluno.media.toFixed(1)}`);
    });

    document.getElementById("listaAprovados").innerHTML = "";
    document.getElementById("listaReprovados").innerHTML = "";

    document.getElementById("linhaGeral").textContent = `"Média Geral da Turma: ${mediaGeralTurma.toFixed(1)}"`;

    aprovados.map(function(aluno) {
        let p = document.createElement("p");
        p.textContent = `"${aluno.nome} - Média: ${aluno.media.toFixed(1)}"`;
        document.getElementById("listaAprovados").appendChild(p);
    });

    reprovados.map(function(aluno) {
        let p = document.createElement("p");
        p.textContent = `"${aluno.nome} - Média: ${aluno.media.toFixed(1)}"`;
        document.getElementById("listaReprovados").appendChild(p);
    });
}