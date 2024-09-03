const TransacaoService = require('../services/transacaoService');

class TransacaoController {
    static async getTransacao(req, res) {
        try {
            const transacao = await TransacaoService.findById(req.userInfo.id, req.params.id);
            return res.json(transacao);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async getAllTransacoes(req, res) {
        try {
            const transacoes = await TransacaoService.findAll(req.userInfo.id);
            return res.json(transacoes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = TransacaoController;
