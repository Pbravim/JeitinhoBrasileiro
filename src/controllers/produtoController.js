const ProdutoService = require('../services/produtoService');

class ProdutoController {
    static async create(req, res) {
        try {
            const produto = await ProdutoService.create(req.body);
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async uploadImagem(req, res) {
        try {
            const produto = await ProdutoService.updateImagem(req.params.nome, req.file.filename);
            return res.json(produto);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const produtos = await ProdutoService.findAll();
            return res.json(produtos);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const produto = await ProdutoService.findById(req.params.id);
            return res.json(produto);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const produto = await ProdutoService.update(req.params.id, req.body);
            return res.json(produto);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            await ProdutoService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = ProdutoController;
