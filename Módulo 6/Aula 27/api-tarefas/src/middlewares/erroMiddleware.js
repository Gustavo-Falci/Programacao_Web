function erroMiddleware(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ erro: "Ocorreu um erro interno no servidor." });
}

module.exports = erroMiddleware;