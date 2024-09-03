const path = require('path');
const { Produtos } = require('../models');
const fs = require('fs');

class ProdutoService {
    static async create(data) {
        const novoProduto = await Produtos.create(data)

        const imagePath = path.join(__dirname, '../../public/images/produtos', `${novoProduto.id}.jpg`);

        if (fs.existsSync(imagePath)) {
            novoProduto.dataValues.imagemUrl = `/public/images/produtos/${novoProduto.id}.jpg`;
        } else {

            novoProduto.dataValues.imagemUrl = `/public/images/produtos/default.jpg`;
        }
        return novoProduto;
    }

    static async findAll() {
        const produtos = await Produtos.findAll();

        produtos.forEach(produto => {
            const imagePath = path.join(__dirname, '../../public/images/produtos', `${produto.id}.jpg`);
            if (fs.existsSync(imagePath)) {
                produto.dataValues.imagemUrl = `/public/images/produtos/${produto.id}.jpg`;
            } else {
                produto.dataValues.imagemUrl = `/public/images/produtos/default.jpg`;
            }
        });
        
        return produtos
    }

    static async updateImagem(id, filename) {
        const produto = await Produtos.findByPk(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }

        // Atualiza o campo `imagemUrl` com o novo caminho
        produto.dataValues.imagemUrl = `/public/images/produtos/${filename}`;
        await produto.save();

        return produto;
    }

    static async findById(id) {
        const produto = await Produtos.findByPk(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }

        const imagePath = path.join(__dirname, '../../public/images/produtos', `${produto.id}.jpg`);

        if (fs.existsSync(imagePath)) {
            novoProduto.dataValues.imagemUrl = `/public/images/produtos/${novoProduto.id}.jpg`;
        } else {
            // Se não existir, usa a imagem padrão
            novoProduto.dataValues.imagemUrl = `/public/images/produtos/default.jpg`;
        }
        return produto;
    }

    static async update(id, data) {
        const produto = await Produtos.findByPk(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        produto.dataValues.imagemUrl = `/public/images/produtos/${produto.id}.jpg`

        return await produto.update(data);
    }

    static async delete(id) {
        const produto = await Produtos.findByPk(id);
        if (!produto) {
            throw new Error('Produto não encontrado');
        }
        await produto.destroy();
    }
}

module.exports = ProdutoService;
