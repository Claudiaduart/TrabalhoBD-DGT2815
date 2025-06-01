const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    _id: { type: banco.Schema.Types.ObjectId},
    titulo: { type: String, required: true },
    codEditora: { type: Number, required: true },
    resumo: { type: String },
    autores: [{ type: String }]
});

const Livro = banco.model('Livro', LivroSchema, 'livros');
module.exports = Livro;

