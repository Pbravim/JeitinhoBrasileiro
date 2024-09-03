const { Entrega, Transacao, Carrinho } = require('../models');

class EntregaService {
    static async create(transacaoId, userId, endereco) {
        const entrega = await Entrega.create({
            transacao_id: transacaoId,
            status: 'pendente',
            user_id: userId,
            endereco
        });
        return entrega;
    }

    static async findById(userId, id) {
        const entrega = await Entrega.findOne({
            where: { id },
            include: {
                model: Transacao,
                as: "transacao",
                include: {
                    model: Carrinho,
                    as: "carrinho",
                    where: { user_id: userId }
                }
            }
        });

        if (!entrega) {
            throw new Error('Entrega não encontrada');
        }
        return entrega;
    }

    static async findAll(userId) {
        return await Entrega.findAll({
            include: {
                model: Transacao,
                as: "transacao",
                include: {
                    model: Carrinho,
                    as: "carrinho",
                    where: { user_id: userId }
                }
            }
        });
    }
}

module.exports = EntregaService;
