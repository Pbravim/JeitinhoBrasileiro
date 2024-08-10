const HttpError = require("../utils/customError/httpError");
const db = require('../sequelize/models/index');

const ProjetoUsuario = db.ProjetoUsuario

const assignUserToProject = async (data) => {
    return await ProjetoUsuario.create(data);
};

const getAllAssignments = async () => {
    return await ProjetoUsuario.findAll();
};

const getAssignmentById = async (userId, projetoId) => {
    return await ProjetoUsuario.findOne({
        where:{user_id: userId , projeto_id:projetoId }
    });
};

const updateAssignment = async (userId, projetoId, data) => {
    const assignment = await ProjetoUsuario.findOne({
        where:{user_id: userId , projeto_id:projetoId }
    });
    if (assignment) {
        return await assignment.update(data);
    }
    return null;
};

const deleteAssignment = async (userId, projetoId,) => {
    const assignment = await ProjetoUsuario.findOne({
        where:{user_id: userId , projeto_id:projetoId }
    });    if (assignment) {
        await assignment.destroy();
    }
};

module.exports = {
    assignUserToProject,
    getAllAssignments,
    getAssignmentById, 
    updateAssignment,
    deleteAssignment,
}
