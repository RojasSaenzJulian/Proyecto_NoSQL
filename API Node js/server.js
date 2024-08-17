const express = require('express'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 

const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'editarPerfil.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'instalaciones.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notificaciones.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobreNosotros.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tratamientos.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
}); 