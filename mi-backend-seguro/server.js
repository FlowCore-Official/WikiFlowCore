const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Ruta de prueba principal
app.get('/', (req, res) => {
    res.json({ mensaje: "¡Servidor de Flowcore activo y funcionando al 100%!" });
});

// Ruta de contenido para la wiki
app.get('/api/wiki/contenido', (req, res) => {
    res.json({
        seccion: "SwinRang",
        estado: "Blindado",
        leyendas: ["Prueba 1", "Prueba 2"]
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});
