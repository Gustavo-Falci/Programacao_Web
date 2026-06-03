const tarefas = require('../models/tarefaModel');

function listar(req, res) {
    res.json(tarefas);
}

function criar(req, res) {
    const { titulo } = req.body;
    
    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
        titulo: titulo,
        concluida: false
    };
    
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
}

function atualizar(req, res) {
    const id = Number(req.params.id);
    const { titulo, concluida } = req.body;
    
    const tarefa = tarefas.find(t => t.id === id);
    
    if (!tarefa) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }
    
    if (titulo !== undefined) tarefa.titulo = titulo;
    if (concluida !== undefined) tarefa.concluida = concluida;
    
    res.json(tarefa);
}

function deletar(req, res) {
    const id = Number(req.params.id);
    const index = tarefas.findIndex(t => t.id === id);
    
    if (index === -1) {
        return res.status(404).json({ erro: "Tarefa não encontrada." });
    }
    
    tarefas.splice(index, 1);
    res.status(204).send();
}

module.exports = {
    listar,
    criar,
    atualizar,
    deletar
};