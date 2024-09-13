const express = require('express');
const router = new express.Router();
const controller = require('../controllers/produto-controller.js');

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'API',
        version: '0.0.1'
    });
});

router.get('/produtos', async(req, res, next) => {
    const data = await controller.get(req, res);
    res.status(200).send(data);
});

router.post('/produtos', (req, res) => {
    const { nome, preco, qtdEstoque, tipoMaterial, fabricante } = req.body;

    if (!nome || !preco || !qtdEstoque || !tipoMaterial || !fabricante) {
        return res.status(400).send('Bad Request: informações estão faltando.');
    }
    return controller.post(req, res);

});

router.put('/produtos', (req, res) => {
    const { nome, preco, qtdEstoque, tipoMaterial, fabricante } = req.body;

    if (!nome || !preco || !qtdEstoque || !tipoMaterial || !fabricante) {
        return res.status(400).send('Bad Request: informações estão faltando.');
    }
    res.status(204).send({mensagem: "Produto atualizado com sucesso."});
    return controller.put(req, res);

});

module.exports = router;