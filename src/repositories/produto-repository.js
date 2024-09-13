const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async() => {
    const result = await Produto.find();
    return result;
}

exports.create = async(data) => {
    const produto = Produto(data);
    await produto.save();
}

exports.update = async(id, data) =>{
    await Produto.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            preco: data.preco,
            qtdEstoque: data.qtdEstoque,
            tipoMaterial: data.tipoMaterial,
            fabricante: data.fabricante
        }
    });
}