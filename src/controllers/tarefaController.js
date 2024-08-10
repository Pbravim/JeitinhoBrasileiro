const tarefasService = require('../services/tarefasService.js');

const create = async (req, res) => {
    try {
        const tarefa = await tarefasService.create(req.body);
        res.status(201).json({ data: tarefa, message: "Tarefa criada com sucesso" });
    } catch (error) {
        console.error('Erro ao criar tarefa:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const tarefaId = req.params.id;
        const tarefa = await tarefasService.updateTarefa(tarefaId, req.body);
        res.status(200).json({ data: tarefa, message: "Tarefa atualizada com sucesso" });
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await tarefasService.deleteTarefa(req.params.id);
        res.status(200).json({ message: "Tarefa deletada com sucesso" });
    } catch (error) {
        console.error('Erro ao deletar tarefa:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const get = async (req, res) => {
    try {
        const tarefa = await tarefasService.getTarefa(req.params.id);
        res.status(200).json({ data: tarefa, message: "Tarefa obtida com sucesso" });
    } catch (error) {
        console.error('Erro ao obter tarefa:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const tarefas = await tarefasService.getAllTarefa();
        res.status(200).json({ data: tarefas, message: "Lista de tarefas obtida com sucesso" });
    } catch (error) {
        console.error('Erro ao obter lista de tarefas:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const tarefaController = {
    create,
    getAll,
    get,
    remove,
    update,
};

module.exports = tarefaController;
