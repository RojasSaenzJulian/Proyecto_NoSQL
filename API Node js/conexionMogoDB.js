const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/clinica';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log('Conectado exitosamente a Clínica Dentalux');
    } catch (error) {
        console.error('No se pudo conectar exitosamente a Clínica Dentalux, error: ' + error);
        process.exit(1);
    }

};

module.exports = connectDB;