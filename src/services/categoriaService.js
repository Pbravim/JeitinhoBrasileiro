const { Categoria } = require('../models');

class CategoriaService {
    static async create(data) {
        return await Categoria.create(data);
    }

    static async findAll() {
        return await Categoria.findAll();
    }

    static async findById(id) {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            throw new Error('Categoria não encontrada');
        }
        return categoria;
    }

    static async update(id, data) {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            throw new Error('Categoria não encontrada');
        }
        return await categoria.update(data);
    }

    static async delete(id) {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            throw new Error('Categoria não encontrada');
        }
        await categoria.destroy();
    }
}

module.exports = CategoriaService;
