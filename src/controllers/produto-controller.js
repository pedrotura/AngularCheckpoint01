const repository = require('../repositories/produto-repository.js');

exports.get = async(req, res) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({mensagem: "Erro ao realizar a consulta."});
    }
}

exports.post = async(req, res) => {
    try {
        await repository.create(req.body);
        return res.status(201).send({mensagem: "Produto inserido com sucesso."});
    } catch (err) {
        res.status(500).send({mensagem: "Erro ao inserir produto."});
    }
}

exports.put = async(req, res) => {
    try {
        const id = req.params.id;
        await repository.update(id, req.body);
        return res.status(204).send({mensagem: "Produto atualizado com sucesso."});
    } catch (err) {
        res.status(500).send({mensagem: "Erro ao atualizar produto."});
    }
}
