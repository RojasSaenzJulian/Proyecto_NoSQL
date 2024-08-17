const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

// Conectar a la base de datos
const connectDB = require('./conexionMogoDB');
connectDB();

//Modelos
const Usuarios = require('./models/usuarios');
const Dentistas = require('./models/dentistas');
const Citas = require('./models/citas');
const HistorialMedico = require('./models/historialMedico');
const Pagos = require('./models/pagos');
const Tratamientos = require('./models/tratamientos');

const url = 'http://localhost';

const app = express();
const port = 3002;
//Conexion DB

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


/*USUARIOS****************************/
// ver usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// ver usuario específico
app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuarios = await Usuarios.findById(req.params.id);

        if(!usuarios) {
            res.status(404).json({message: "Usuario no encontrado"});
        }

        res.json(usuarios);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// agregar usuarios
app.post('/usuarios', async (req, res) => {
    try {
        const newusuario =  new Usuarios(req.body);
        await newusuario.save();
        res.status(201).json(newusuario);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// actualizar usuarios
app.put('/usuarios/:id', async (req, res) => {
    try {
        const usuarios = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!usuarios) {
            res.status(404).json({message: "Usuario no encontrado"});
        }

        res.json(usuarios);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar usuarios
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuarios = await Usuarios.findByIdAndDelete(req.params.id);

        if(!usuarios) {
            res.status(404).json({message: "Usuario no encontrado"});
        }

        res.json({message: "Usuario eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

/*Dentistas************************************************************************************/
// ver dentistas
app.get('/dentistas', async (req, res) => {
    try {
        const dentistas = await Dentistas.find();
        res.json(dentistas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// ver dentista específico
app.get('/dentistas/:id', async (req, res) => {
    try {
        const dentistas = await Dentistas.findById(req.params.id);

        if(!dentistas) {
            res.status(404).json({message: "Dentista no encontrado"});
        }

        res.json(dentistas);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// agregar dentistas
app.post('/dentistas', async (req, res) => {
    try {
        const newdentista =  new Dentistas(req.body);
        await newdentista.save();
        res.status(201).json(newdentista);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// actualizar dentistas
app.put('/dentistas/:id', async (req, res) => {
    try {
        const dentistas = await Dentistas.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!dentistas) {
            res.status(404).json({message: "Usuario no encontrado"});
        }

        res.json(dentistas);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar dentistas
app.delete('/dentistas/:id', async (req, res) => {
    try {
        const dentistas = await Dentistas.findByIdAndDelete(req.params.id);

        if(!dentistas) {
            res.status(404).json({message: "Dentista no encontrado"});
        }

        res.json({message: "Dentista eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
/*Citas************************************************************************************/
// ver citas
app.get('/citas', async (req, res) => {
    try {
        const citas = await Citas.find();
        res.json(citas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// ver citas específico
app.get('/citas/:id', async (req, res) => {
    try {
        const citas = await Citas.findById(req.params.id);

        if(!citas) {
            res.status(404).json({message: "Dentista no encontrado"});
        }

        res.json(citas);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// agregar citas
app.post('/citas', async (req, res) => {
    try {
        const newcita =  new Citas(req.body);
        await newcita.save();
        res.status(201).json(newcita);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// actualizar citas
app.put('/citas/:id', async (req, res) => {
    try {
        const citas = await Citas.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!citas) {
            res.status(404).json({message: "Cita no encontrado"});
        }

        res.json(citas);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar citas
app.delete('/citas/:id', async (req, res) => {
    try {
        const citas = await Citas.findByIdAndDelete(req.params.id);

        if(!citas) {
            res.status(404).json({message: "Cita no encontrado"});
        }

        res.json({message: "Dentista eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

/*Tratamientos************************************************************************************/
// ver tratamientos
app.get('/tratamientos', async (req, res) => {
    try {
        const tratamientos = await Tratamientos.find();
        res.json(tratamientos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// ver tratamientos específico
app.get('/tratamientos/:id', async (req, res) => {
    try {
        const tratamientos = await Tratamientos.findById(req.params.id);

        if(!tratamientos) {
            res.status(404).json({message: "Tratamiento no encontrado"});
        }

        res.json(tratamientos);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// agregar tratamientos
app.post('/tratamientos', async (req, res) => {
    try {
        const newtratamiento =  new Tratamientos(req.body);
        await newtratamiento.save();
        res.status(201).json(newtratamiento);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// actualizar tratamientos
app.put('/tratamientos/:id', async (req, res) => {
    try {
        const tratamientos = await Tratamientos.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!tratamientos) {
            res.status(404).json({message: "Tratamiento no encontrado"});
        }

        res.json(tratamientos);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar tratamientos
app.delete('/tratamientos/:id', async (req, res) => {
    try {
        const tratamientos = await Tratamientos.findByIdAndDelete(req.params.id);

        if(!tratamientos) {
            res.status(404).json({message: "Tratamiento no encontrado"});
        }

        res.json({message: "Tratamiento eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

/*Pagos************************************************************************************/
// ver pagos
app.get('/pagos', async (req, res) => {
    try {
        const pagos = await Pagos.find();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// ver pagos específico
app.get('/pagos/:id', async (req, res) => {
    try {
        const pagos = await Pagos.findById(req.params.id);

        if(!pagos) {
            res.status(404).json({message: "Pago no encontrado"});
        }

        res.json(pagos);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// agregar pagos
app.post('/pagos', async (req, res) => {
    try {
        const newpagos=  new Pagos(req.body);
        await newpagos.save();
        res.status(201).json(newpagos);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// actualizar pagos
app.put('/pagos/:id', async (req, res) => {
    try {
        const pagos = await Pagos.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!pagos) {
            res.status(404).json({message: "Pago no encontrado"});
        }

        res.json(pagos);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar pagos
app.delete('/pagos/:id', async (req, res) => {
    try {
        const pagos = await Pagos.findByIdAndDelete(req.params.id);

        if(!pagos) {
            res.status(404).json({message: "Pago no encontrado"});
        }

        res.json({message: "Pago eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

/*Historial Medico************************************************************************************/
// ver historialMedico
app.get('/historialMedico', async (req, res) => {
    try {
        const historialMedico = await Pagos.find();
        res.json(historialMedico);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// ver historialMedico específico
app.get('/historialMedico/:id', async (req, res) => {
    try {
        const historialMedico = await Pagos.findById(req.params.id);

        if(!historialMedico) {
            res.status(404).json({message: "Pago no encontrado"});
        }

        res.json(historialMedico);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// agregar historialMedico
app.post('/historialMedico', async (req, res) => {
    try {
        const newhistorialMedico =  new Pagos(req.body);
        await newhistorialMedico.save();
        res.status(201).json(newhistorialMedico);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// actualizar historialMedico
app.put('/historialMedico/:id', async (req, res) => {
    try {
        const historialMedico = await Pagos.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!historialMedico) {
            res.status(404).json({message: "Pago no encontrado"});
        }

        res.json(historialMedico);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar historialMedico
app.delete('/historialMedico/:id', async (req, res) => {
    try {
        const historialMedico = await Pagos.findByIdAndDelete(req.params.id);

        if(!historialMedico) {
            res.status(404).json({message: "Pago no encontrado"});
        }

        res.json({message: "Pago eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
//Declaracion de rutas
//app.use('/api', usuariosRoutes);
// app.use('/api', dentistasRoutes);
// app.use('/api', citasRoutes);
// app.use('/api', historialMedicoRoutes);
// app.use('/api', pagosRoutes);
// app.use('/api', tratamientosRoutes);


app.listen(port, () => {    
        console.log(`Puerto de servicio ${url}:${port}/api`, port);
});
