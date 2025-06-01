const express = require('express');
const { obterLivros, incluir, excluir } = require('../src/modelo/livro-dao'); 
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros(); 
        res.json(livros); 
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar livros' });
    }
});


router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro); 
        res.status(201).json({ mensagem: 'Livro incluído com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro' });
    }
});


router.delete('/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        await excluir(codigo); 
        res.json({ mensagem: 'Livro excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro' });
    }
});

module.exports = router;