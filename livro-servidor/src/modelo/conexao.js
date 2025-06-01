const banco = require('mongoose');

var options = {
    dbName: 'livraria',
    useUnifiedTopology: true,
    useNewUrlParser: true
};

banco.connect('mongodb+srv://claudiariane:1q2w3e4r@cluster0.zfaqikr.mongodb.net/', options)
    .then(() => {
        console.log("Conectado ao banco.");
    })
    .catch((err) => console.log("Erro na conexão:" + err));

module.exports = banco;