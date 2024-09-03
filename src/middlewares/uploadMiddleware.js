const multer = require('multer');
const path = require('path');

// Configurando onde e como os arquivos serão armazenados
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Define o destino dos uploads - aqui, a pasta "public/images/produtos"
        cb(null, path.join(__dirname, '../../public/images/produtos'));
    },
    filename: (req, file, cb) => {
        // Nomeia o arquivo com base no ID do produto e mantém a extensão original
        const ext = path.extname(file.originalname);
        cb(null, `${req.params.id}${ext}`);
    }
});

// Filtragem opcional - pode adicionar validações para tipos de arquivos permitidos
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const mimeType = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Apenas imagens são permitidas'));
    }
};

// Criação do middleware de upload
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5 MB para o tamanho do arquivo
    fileFilter: fileFilter
});

module.exports = upload;
