const express = require('express'); 
const router = express.Router();
const Usuarios = require('../models/usuarios');

router.get('/usuarios', async (req, res) =>{
    try {
        const usuarios = await Usuarios.find();
        res.send(usuarios);
    }
    catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router;