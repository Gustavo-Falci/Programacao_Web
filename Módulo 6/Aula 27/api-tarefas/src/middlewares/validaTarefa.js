function validaTarefa(req, res, next) {
    const { titulo } = req.body;
    
    if (!titulo || titulo.trim() === "") {
        return res.status(400).json({ erro: "O campo 'titulo' é obrigatório." });
    }
    
    next();
}

module.exports = validaTarefa;