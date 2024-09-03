const CategoriaService = require('../services/categoriaService');

class CategoriaController {
    static async create(req, res) {
        try {
            const categoria = await CategoriaService.create(req.body);
            return res.status(201).json(categoria);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const categorias = await CategoriaService.findAll();
            return res.json(categorias);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const categoria = await CategoriaService.findById(req.params.id);
            return res.json(categoria);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const categoria = await CategoriaService.update(req.params.id, req.body);
            return res.json(categoria);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            await CategoriaService.delete(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = CategoriaController;
