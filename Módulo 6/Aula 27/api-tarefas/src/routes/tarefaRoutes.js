const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
const validaTarefa = require('../middlewares/validaTarefa');

router.get('/tarefas', tarefaController.listar);
router.post('/tarefas', validaTarefa, tarefaController.criar);
router.put('/tarefas/:id', validaTarefa, tarefaController.atualizar);
router.delete('/tarefas/:id', tarefaController.deletar);

module.exports = router;