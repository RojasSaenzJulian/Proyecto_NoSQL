const mongoose = require('mongoose');

const tratamientoSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        costo: { type: Number, required: true }
    }
);

module.exports = mongoose.model('Tratamiento', tratamientoSchema);
