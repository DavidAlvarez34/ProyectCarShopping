const sequelize = require('../db/conexion');
module.exports = class loginModel {
    constructor(theUser,login){
        this.theUser = theUser;
        this.login = login;
    }
    async create (theUser){
        let result = await sequelize.query("INSERT INTO usuario (nombre,apellido,email,userPasword) VALUES ('" + theUser.nombre + "','" + theUser.apellido + "','" + theUser.email + "','" + theUser.userPasword + "');");
        return result;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM usuario");
        return result[0];
    }
    async find (loginId){
        let result = await sequelize.query("SELECT * FROM usuario WHERE idUsuario = " + loginId);
        return result[0][0];
    }
    async update (updateAPassword){
        let result = await sequelize.query("UPDATE usuario SET userPasword = '" + updateAPassword.userPasword +"'"+ " WHERE idUsuario = " + updateAPassword.idUsuario + ";");
        return result;
    }
    async delete (loginId){
        let result = await sequelize.query("DELETE FROM usuario WHERE idUsuario = " + loginId);
        return result;
    }

    async findToken (user){
        let result = await sequelize.query("SELECT nombre,apellido,email FROM usuario WHERE email = '" + user.email + "' AND userPasword = '" + user.userPasword + "'");
        if (result[0].length > 0) {
            if (user.email == result[0][0].email) {
                return result[0][0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}