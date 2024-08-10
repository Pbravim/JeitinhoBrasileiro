// controllers/projetoUsuarioController.js
const projetoUsuarioService = require('../services/projetoUsuarioService');
require('dotenv').config

const ProjetoID = process.env.PROJETO_ID

const assignUser = async (req, res) => {
    try {
        req.body.user_id = req.userInfo.id
        req.body.projeto_id = ProjetoID
        
        const assignment = await projetoUsuarioService.assignUserToProject(req.body);
        res.status(201).json({ data: assignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const assignments = await projetoUsuarioService.getAllAssignments();
        res.status(200).json({ data: assignments });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Pegar usuarios por projeto
const getByProjetoId = async (req, res) => {
    try {

        const assignment = await projetoUsuarioService.getAssignmentById(ProjetoID);
        if (assignment) {
            res.status(200).json({ data: assignment });
        } else {
            res.status(404).json({ error: 'Assignment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const assignment = await projetoUsuarioService.updateAssignment(req.userInfo.id, ProjetoID, req.body);
        if (assignment) {
            res.status(200).json({ data: assignment });
        } else {
            res.status(404).json({ error: 'Assignment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAssignment = async (req, res) => {
    try {
        await projetoUsuarioService.deleteAssignment(req.userInfo.id, ProjetoID);
        res.status(200).json({ message: 'Assignment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    assignUser,
    getAll,
    getByProjetoId,
    update,
    delete: deleteAssignment
};
