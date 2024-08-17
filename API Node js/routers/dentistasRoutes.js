const express = require('express'); 
const router = express.Router();
const Dentistas = require('../models/dentistas');

router.get('/dentistas', async (req, res) =>{
    try {
        const dentistas = await Dentistas.find();
        res.send(dentistas);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;