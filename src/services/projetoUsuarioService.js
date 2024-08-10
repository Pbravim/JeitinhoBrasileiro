const { v4: uuidv4 } = require('uuid');
const HttpError = require("../utils/customError/httpError");
const db = require('../sequelize/models/index');

const ProjetoUsuario = db.ProjetoUsuario

exports.assignUserToProject = async (data) => {
    return await ProjetoUsuario.create(data);
};

exports.getAllAssignments = async () => {
    return await ProjetoUsuario.findAll();
};

exports.getAssignmentById = async (userId, projetoId) => {
    return await ProjetoUsuario.findOne({
        where:{user_id: userId , projeto_id:projetoId }
    });
};

exports.updateAssignment = async (id, data) => {
    const assignment = await ProjetoUsuario.findByPk(id);
    if (assignment) {
        return await assignment.update(data);
    }
    return null;
};

exports.deleteAssignment = async (id) => {
    const assignment = await ProjetoUsuario.findByPk(id);
    if (assignment) {
        await assignment.destroy();
    }
};
