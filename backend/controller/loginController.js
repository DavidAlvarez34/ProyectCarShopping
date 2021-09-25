const loginModel = require('../model/loginModel');
//Modelo
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
    return "PasswordCambiado.";
}
module.exports.deleteLogin = async (loginId) => {
    let response = new  loginModel();
    let result = await response.delete(loginId);
    return "Login eliminado.";
}