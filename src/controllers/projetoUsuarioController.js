// controllers/projetoUsuarioController.js
const projetoUsuarioService = require('../services/projetoUsuarioService');

exports.assignUser = async (req, res) => {
    try {
        const assignment = await projetoUsuarioService.assignUserToProject(req.body);
        res.status(201).json({ data: assignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const assignments = await projetoUsuarioService.getAllAssignments();
        res.status(200).json({ data: assignments });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const assignment = await projetoUsuarioService.getAssignmentById(req.params.id);
        if (assignment) {
            res.status(200).json({ data: assignment });
        } else {
            res.status(404).json({ error: 'Assignment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const assignment = await projetoUsuarioService.updateAssignment(req.params.id, req.body);
        if (assignment) {
            res.status(200).json({ data: assignment });
        } else {
            res.status(404).json({ error: 'Assignment not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        await projetoUsuarioService.deleteAssignment(req.params.id);
        res.status(200).json({ message: 'Assignment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
