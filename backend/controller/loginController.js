const jwt = require('jsonwebtoken');
const loginModel = require('../model/loginModel');

module.exports.createUser = async (userCreate) => {
    let response = new loginModel();
    let result = await response.create(userCreate);
    return "Usuario creado.";
}

module.exports.listLogin = async () => {
    let response = new loginModel();
    let result = await response.list();
    return result;
}
module.exports.findLogin = async (loginId) => {
    let response = new loginModel();
    let result = await response.find(loginId);
    return result;
}
module.exports.updateLogin = async (updateLogin) => {
    let response = new loginModel();
    let result = await response.update(updateLogin);
    return "Password cambiado.";
}
module.exports.deleteLogin = async (loginId) => {
    let response = new  loginModel();
    let result = await response.delete(loginId);
    return "Usuario eliminado.";
}

module.exports.login = async (user) => {
    let login = new loginModel();
    let data = await login.findToken(user);
    if (data) {
        let token = jwt.sign({data},process.env.SECRETKEY);
        return token;
    } else {
        return "Usuario no autenticado.";
    }
}