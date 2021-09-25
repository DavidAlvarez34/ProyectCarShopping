const loginController = require('../controller/loginController');//importacion
//rutas
module.exports = async (app) => {
    //Crear login
    app.post('/createLogin',async(req,res) => {
        let myLogin = req.body;
        console.log(myLogin);
        res.send(await loginController.createUser(myLogin));
    });
    //Mostrar login
    app.get('/viewLogin',async(req,res) => {
        res.send(await loginController.listLogin());
    });
    //Enctontrar productos por ID
    app.get('/login/:id',async(req,res) => {
        let loginId = req.params.id
        res.send(await loginController.findLogin(loginId));
    });
    //Modificar disponibilidad de productos
    app.post('/updateLogin',async(req,res) => {
        let updateUser = req.body;
        res.send(await loginController.updateLogin(updateUser));
    });
    //Eliminar productos
    app.delete('/deleteLogin/:id',async (req, res) => {
        let LoginId = req.params.id
        res.send(await loginController.deleteLogin(LoginId));
    })
};