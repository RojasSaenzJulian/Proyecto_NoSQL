const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://osvaldoguco:m50jVSzUb1VsewQN@cluster0.nsgt6cy.mongodb.net/ProyectoNoSQL?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado exitosamente a Clínica Dentalux');
    } catch (error) {
        console.error('No se pudo conectar a Clínica Dentalux, error: ' + error);
        process.exit(1);
    }
};

module.exports = connectDB;
