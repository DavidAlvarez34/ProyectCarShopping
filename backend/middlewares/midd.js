const rateLimit = require('express-rate-limit');//limitador de peticiones

const corsOption = {
    origin : function (origin, callback) {
        callback(null, true)//cors
        if (process.env.LISTA_BLANCA.indexOf(origin) !== -1){
            callback(null, true)
        }else {
            callback(new Error('No autorizado por Cors'))
        }
    }
}

log = function (req,res,next) {
    const {method,path,query,body} = req;
    console.log(`${method} - ${path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`);
    next()
}

Autenticar = function (req,res,next) {
    const {nombre,codigo,clave} = req.body;
    if(clave == process.env.CLAVE_API){
        return next()
    }
    else{
        return res.status(400).json("No ingresaste la clave de autentificación")
    }
}

const limitador = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Limite de peticiones
    message: 'Limite de solicitudes exedido'
})

autenticarModi = function (req,res,next) {
    const {id,available,token} = req.body;
    if(token != undefined){
        return next()
    }
    else{
        return res.status(400).json("No puedes modificar los productos")
    }
}

autenticarModiU = function (req,res,next) {
    const {idUsuario,userPasword,token} = req.body;
    if(token != undefined){
        return next()
    }
    else{
        return res.status(400).json("No puedes modificar los usuarios")
    }
}

module.exports = {limitador, Autenticar, log, corsOption, autenticarModi, autenticarModiU}