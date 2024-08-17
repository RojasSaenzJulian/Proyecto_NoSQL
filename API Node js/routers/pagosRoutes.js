const express = require('express'); 
const router = express.Router();
const Pagos = require('../models/pagos');

router.get('/pagos', async (req, res) =>{
    try {
        const pagos = await Pagos.find();
        res.send(pagos);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;