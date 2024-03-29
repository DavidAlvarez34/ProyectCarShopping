const loginController = require('../controller/loginController');
const validation = require('../middlewares/midd');

module.exports = async (app) => {
    //Crear usuario
    app.post('/createLogin',async(req,res) => {
        let myLogin = req.body;
        console.log(myLogin);
        res.send(await loginController.createUser(myLogin));
    });
    //Mostrar usuarios
    app.get('/viewLogin',async(req,res) => {
        res.send(await loginController.listLogin());
    });
    //Enctontrar usuarios por ID
    app.get('/login/:id',async(req,res) => {
        let loginId = req.params.id
        res.send(await loginController.findLogin(loginId));
    });
    //Modificar password de usuario
    app.post('/updateLogin',validation.autenticarModiU,async(req,res) => {
        let updateUser = req.body;
        res.send(await loginController.updateLogin(updateUser));
    });
    //Eliminar usuarios
    app.delete('/deleteLogin/:id',async (req, res) => {
        let LoginId = req.params.id
        res.send(await loginController.deleteLogin(LoginId));
    })
    //Login de usuario para mandar token
    app.post('/login',async(req,res) => {
        let user = req.body;
        let token = await loginController.login(user);
        res.send({'token':token});
        console.log(token);
    });
};