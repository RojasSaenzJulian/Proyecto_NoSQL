const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema(
    {
        pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
        fecha: { type: Date, required: true },
        monto: { type: Number, required: true },
        metodoPago: { type: String, required: true }  // Tarjeta de crédito, efectivo, etc.
    }
);

module.exports = mongoose.model('Pago', pagoSchema);
