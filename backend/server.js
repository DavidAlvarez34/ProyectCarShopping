const express = require("express");
const dotenv = require('dotenv');
const db = require('./db/db');//modulo de los comnponentes de la base de datos
const midd = require('./middlewares/midd');//modulos de autenticacion
const apis = require('./apis'); //apis de mercado libre
const cors = require('cors');//seguridad
const app = express();
dotenv.config();

//Middlelware
app.use(express.json());
app.use(cors());
app.use(midd.log);
app.use(midd.limitador);

app.listen(process.env.PORT, function () {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});

//Endpoint para hacer la conexion a mercado libre
app.get('/startMl', async(req, res) => {
    let respProd = await apis.getPoductsApi()
    res.json(respProd);
});
app.get('/startComponentsPC', async(req, res) => {
    let respProd = await apis.startComponentsPC()
    res.json(respProd);
});
app.get('/startLaptops', async(req, res) => {
    let respProd = await apis.startLaptops()
    res.json(respProd);
});
app.get('/startDisplay', async(req, res) => {
    let respProd = await apis.startDisplay()
    res.json(respProd);
});
app.get('/startPc', async(req, res) => {
    let respProd = await apis.startPc()
    res.json(respProd);
});
app.get('/startPeripherals', async(req, res) => {
    let respProd = await apis.startPeripherals()
    res.json(respProd);
});

//Endpoint para obtener el Carrito
app.get('/cart',cors(midd.corsOption),function (req, res) {
    res.send(db.Cart)
})

//Endpoint para agregar productos al Carrito
app.post('/cart',midd.Autenticar, function (req, res) {
    if (!req.body.id || !req.body.nombre || !req.body.cantidad || !req.body.precio) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Es indispensable enviar id, nombre, cantidad y precio.'
        }
    } else {
        if (db.buscaProducto(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Se agregó un producto identico al carrito.'
            }
        } else {
            db.nuevoProducto(req.body.id, req.body.nombre,req.body.cantidad,req.body.precio)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Producto agregado al carrito.'
            }
        }
    }
    res.send(db.respuesta)
})

//Endpoint para eliminar productos del Carrito
app.delete('/cart/:id',midd.Autenticar, function (req, res) {
    if (db.borraProducto(req.params.id)) {
            db.respuesta = {
            codigo: 200,
            error: false,
            mensaje: 'Producto eliminado del carrito.'
        }
    } else {
        db.respuesta = {
            codigo: 421,
            error: true,
            mensaje: 'Producto no existente.'
        }
    }
    res.send(db.respuesta);
})