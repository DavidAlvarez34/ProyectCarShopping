const sequelize = require('../db/conexion');

module.exports = class FormModel {
    constructor(theUser,login){
        this.theUser = theUser;
        this.login = login;
       
    }
    async create (theUser){
        let result = await sequelize.query("INSERT INTO methodPayment(method,cardName,numCard,expiration,codeSecurity) VALUES ('"+theUser.method+"','"+theUser.cardName+"', '"+theUser.numCard+"','"+theUser.dateExpiration+"','"+theUser.codeSecurity+"');");
        return result;
    }
   
}
