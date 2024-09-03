const { Transacao, Carrinho, Entrega } = require('../models');

class TransacaoService {
    static async create(carrinhoId, userId, amount, paymentMethod) {
        const transacao = await Transacao.create({
            amount: amount,
            payment_method: paymentMethod,
            status: 'pago',
            carrinho_id: carrinhoId,
            user_id: userId
        });
        return transacao;
    }

    static async findById(userId, id) {
        const transacao = await Transacao.findOne({
            where: { id },
            include: {
                model: Carrinho,
                as: "carrinho",
                where: { user_id: userId }
            }
        });

        if (!transacao) {
            throw new Error('Transação não encontrada');
        }
        return transacao;
    }

    static async findAll(userId) {
        return await Transacao.findAll({
            include: {
                model: Carrinho,
                as: "carrinho",
                where: { user_id: userId }
            }
        });
    }
}

module.exports = TransacaoService;
