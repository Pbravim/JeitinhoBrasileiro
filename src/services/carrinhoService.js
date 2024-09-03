const { Carrinho, Produtos, Carrinho_Itens } = require('../models');
const EntregaService = require('./entregaService');
const TransacaoService = require('./transacaoService');

class CarrinhoService {
    static async addItem(userId, produtoId, quantidade) {
        const produto = await Produtos.findByPk(produtoId);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        let carrinho = await Carrinho.findOne({ where: { user_id: userId, status: 'aberto' } });
        if (!carrinho) {
            carrinho = await Carrinho.create({ user_id: userId, status: 'aberto' });
        }

        let carrinhoItem = await Carrinho_Itens.findOne({ 
            where: { carrinho_id: carrinho.id, produto_id: produtoId } 
        });

        if (carrinhoItem) {
            carrinhoItem.quantidade += quantidade;
            carrinhoItem.preco_total_itens = carrinhoItem.quantidade * produto.preco;
            await carrinhoItem.save();  
        } else {
            carrinhoItem = await Carrinho_Itens.create({
                carrinho_id: carrinho.id,
                produto_id: produto.id,
                quantidade,
                preco_total_itens: quantidade * produto.preco
            });
        }

        return carrinhoItem;
    }

    static async getCarrinho(userId) {
        const carrinho = await Carrinho.findOne({
            where: { user_id: userId, status: 'aberto' },
            include: [{
                model: Carrinho_Itens,
                as: 'itens',
                include: [{
                    model:Produtos, 
                    as:'produto'
                }]
            }]
        });

        if (!carrinho) {
            throw new Error('Carrinho não encontrado');
        }

        return carrinho;
    }

    static async checkout(userId, paymentMethod, endereco) {
        const carrinho = await Carrinho.findOne({ where: { user_id: userId, status: 'aberto' } });
        if (!carrinho) {
            throw new Error('Carrinho não encontrado');
        }

        const items = await Carrinho_Itens.findAll({ where: { carrinho_id: carrinho.id } });
        const totalAmount = items.reduce((total, item) => total + item.preco_total_itens, 0);

        const transacao = await TransacaoService.create(carrinho.id, userId, totalAmount, paymentMethod)

        const entrega = await EntregaService.create(transacao.id, userId, endereco);

        carrinho.status = 'fechado';
        await carrinho.save();

        return { transacao, entrega };
    }

    static async clearCarrinho(userId) {
        const carrinho = await Carrinho.findOne({ where: { user_id: userId, status: 'aberto' } });
        if (!carrinho) {
            throw new Error('Carrinho não encontrado');
        }

        await Carrinho_Itens.destroy({ where: { carrinho_id: carrinho.id } });

        return { message: 'Carrinho limpo com sucesso' };
    }
}

module.exports = CarrinhoService;
