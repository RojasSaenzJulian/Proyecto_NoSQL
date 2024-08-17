const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema(
    {
        pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        dentistaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dentista', required: true },
        fecha: { type: Date, required: true },
        hora: { type: String, required: true },
        motivo: { type: String, required: true }
    }
);

module.exports = mongoose.model('Cita', citaSchema);
