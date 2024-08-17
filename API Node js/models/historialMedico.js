const mongoose = require('mongoose');

const historialMedicoSchema = new mongoose.Schema(
    {
        pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        diagnostico: { type: String, required: true },
        tratamientos: [
            {
                tratamientoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tratamiento', required: true },
                fecha: { type: Date, required: true },
                comentarios: { type: String }
            }
        ],
        comentariosAdicionales: { type: String }
    }
);

module.exports = mongoose.model('HistorialMedico', historialMedicoSchema);
