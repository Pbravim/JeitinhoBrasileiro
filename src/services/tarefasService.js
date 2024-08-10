const { v4: uuidv4 } = require('uuid');
const HttpError = require("../utils/customError/httpError");
const db = require('../sequelize/models/index');

const Tarefa = db.Tarefa;

// Função para criar uma nova tarefa
const create = async (body) => {
    try {
        const novaTarefa = await Tarefa.create({
            id: uuidv4(),
            descricao: body.descricao,
            data_inicio: body.data_inicio,
            prazo: body.prazo,
            title: body.title,
            projeto_id: body.projeto_id,
            responsavel_id: body.responsavel_id,
            status: 0,
        });

        return { novaTarefa };
    } catch (err) {
        console.error('Erro ao criar tarefa:', err.message);
        throw new HttpError(404, "Não foi possível criar a tarefa");
    }
};

// Função para deletar uma tarefa por ID
const deleteTarefa = async (id) => {
    try {
        const tarefa = await Tarefa.findOne({ where: { id } });

        if (!tarefa) {
            throw new HttpError(404, "Tarefa não encontrada");
        }

        await tarefa.destroy();

        return true;
    } catch (err) {
        console.error('Erro ao deletar tarefa:', err.message);
        throw err;
    }
};

// Função para obter todas as tarefas
const getAllTarefas = async () => {
    try {
        const tarefas = await Tarefa.findAll();
        return tarefas;
    } catch (err) {
        console.error('Erro ao obter todas as tarefas:', err.message);
        throw err;
    }
};

// Função para obter uma tarefa por ID
const getTarefa = async (id) => {
    try {
        const tarefa = await Tarefa.findOne({ where: { id } });

        if (!tarefa) {
            throw new HttpError(404, "Tarefa não encontrada");
        }

        return tarefa;
    } catch (err) {
        console.error('Erro ao obter tarefa:', err.message);
        throw err;
    }
};

// Função para atualizar uma tarefa por ID
const updateTarefa = async (id, body) => {
    try {
        const tarefa = await getTarefa(id);

        // Desestruturação para evitar a atualização de campos não permitidos
        const { id: taskId, createdAt, updatedAt, ...dataUpdate } = body;
        dataUpdate.updatedAt = new Date();

        await tarefa.update(dataUpdate);

        return tarefa;
    } catch (err) {
        console.error('Erro ao atualizar tarefa:', err.message);
        throw err;
    }
};

const tarefasService = {
    create,
    deleteTarefa,
    getAllTarefas,
    getTarefa,
    updateTarefa
};

module.exports = tarefasService;
