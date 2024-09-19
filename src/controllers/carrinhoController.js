const CarrinhoService = require('../services/carrinhoService');

class CarrinhoController {
    static async addItem(req, res) {
        const { produtoId, quantidade } = req.body;

        try {
            const carrinhoItem = await CarrinhoService.addItem(req.userInfo.id, produtoId, quantidade);
            return res.status(201).json(carrinhoItem);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async getCarrinho(req, res) {
        try {
            const carrinho = await CarrinhoService.getCarrinho(req.userInfo.id);
            return res.json(carrinho);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async checkout(req, res) {
        const { formData, paymentType, endereco } = req.body;

        try {
            const result = await CarrinhoService.checkout(req.userInfo.id, formData, paymentType, endereco);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async clearCarrinho(req, res) {
        try {
            const result = await CarrinhoService.clearCarrinho(req.userInfo.id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = CarrinhoController;
