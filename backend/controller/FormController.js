const FormModel = require('../model/FormModel');

module.exports.createMethod = async (userCreate) => {
    let response = new FormModel();
    let result = await response.create(userCreate);
    return "Metodo creado";
}