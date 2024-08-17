const express = require('express'); 
const router = express.Router();
const Citas = require('../models/citas');

router.get('/dentistas', async (req, res) =>{
    try {
        const citas = await Citas.find();
        res.send(citas);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;