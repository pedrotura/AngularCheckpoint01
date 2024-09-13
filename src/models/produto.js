const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheme = new Schema({
    nome: {
        type: String,
        required: true
    },
    preco:{
        type: Number,
        required: true
    },
    qtdEstoque: {
        type: Number,
        required: true
    },
    tipoMaterial: {
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Produto', scheme);