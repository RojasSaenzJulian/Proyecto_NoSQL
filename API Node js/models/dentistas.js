const mongoose = require('mongoose');

const dentistaSchema = new mongoose.Schema(
    {
nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        email: { type: String, required: true },
        especialidad: { type: String, required: true },    
            especialidad: { type: String, required: true }
    }
);

module.exports = mongoose.model('Dentista', dentistaSchema);
