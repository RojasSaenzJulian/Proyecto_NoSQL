const express = require('express'); 
const router = express.Router();
const HistorialMedico = require('../models/historialMedico');

router.get('/historialMedico', async (req, res) =>{
    try {
        const historialMedico = await HistorialMedico.find();
        res.send(historialMedico);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;