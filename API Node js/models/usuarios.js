const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        email: { type: String, required: true },
        tipoUsuario: { type: String, required: true }  // paciente, dentista, administrador
    }
);

module.exports = mongoose.model('Usuario', usuarioSchema);
