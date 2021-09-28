const FormModelUser = require('../model/FormUserModel');

module.exports.createUserForm = async (userCreate) => {
    let response = new FormModelUser();
    let result = await response.create(userCreate);
    return "Metodo creado";
}