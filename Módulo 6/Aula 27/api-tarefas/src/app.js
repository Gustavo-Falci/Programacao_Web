const express = require('express');
const tarefaRoutes = require('./routes/tarefaRoutes');
const logMiddleware = require('./middlewares/logMiddleware');
const erroMiddleware = require('./middlewares/erroMiddleware');

const app = express();

app.use(express.json());
app.use(logMiddleware);

app.use('/api', tarefaRoutes);

app.use(erroMiddleware);

app.listen(3000, () => {
    console.log('API de Tarefas rodando em http://localhost:3000');
});