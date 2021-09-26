const sequelize = require('../db/conexion');

module.exports = class productsModel {
    constructor(product){
        this.product = product;
    }
    async create (product){
        let result = await sequelize.query("INSERT INTO products ([name],brand,model,[description],price,available) VALUES ('" + product.name + "','" + product.brand + "','" + product.model + "','" + product.description + "'," + product.price + "," + product.available + ");");
        return result;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM products");
        return result[0];
    }
    async find (productId){
        let result = await sequelize.query("SELECT * FROM products WHERE idProduct = " + productId);
        return result[0][0];
    }
    async update (product){
        let result = await sequelize.query("SELECT * FROM products WHERE idProduct = " + product.id);
        if(result[0][0] != undefined){
            let result = await sequelize.query("UPDATE products SET available = " + product.available + " WHERE idProduct = " + product.id + ";");
            return result;
        } else {
            return "";
        }
    }
    async delete (productId){
        let result = await sequelize.query("SELECT * FROM products WHERE idProduct = " + productId);
        if(result[0][0] != undefined){
            let result = await sequelize.query("DELETE FROM products WHERE idProduct = " + productId);
            return result;
        } else {
            return "";
        }
    }
}