const express = require('express'); 
const router = express.Router();
const Tratamientos = require('../models/tratamientos');

router.get('/tratamientos', async (req, res) =>{
    try {
        const tratamientos = await Tratamientos.find();
        res.send(tratamientos);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;