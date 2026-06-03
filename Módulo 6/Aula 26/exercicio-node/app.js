const fs = require('fs');
const http = require('http');
const { somar, calcularDesconto } = require('./utils');

const resultadoSoma = somar(150, 50);
const resultadoDesconto = calcularDesconto(200, 15);

const conteudoTexto = `Resultado da Soma: ${resultadoSoma}\nResultado do Desconto: R$ ${resultadoDesconto}`;
fs.writeFileSync('resultado.txt', conteudoTexto);

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        const dadosJson = fs.readFileSync('dados.json', 'utf-8');
        
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(dadosJson);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Servidor Node.js</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f4f6f9; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                    .card { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; }
                    h1 { color: #333; }
                    p { font-size: 18px; color: #007bff; font-weight: bold; }
                    a { display: inline-block; margin-top: 15px; color: #28a745; text-decoration: none; font-weight: bold; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>Primeiros Passos com Node.js</h1>
                    <p>O servidor HTTP está rodando com sucesso!</p>
                    <small>Confira o arquivo "resultado.txt" na pasta do projeto.</small>
                    <br>
                    <a href="/api" target="_blank">Acessar o Desafio Extra (API JSON) →</a>
                </div>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});