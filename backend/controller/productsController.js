const productsModel = require('../model/productsModel');

module.exports.createProduct = async (product) => {
    let response = new productsModel();
    let result = await response.create(product);
    return "Producto creado.";
}

module.exports.listProducts = async () => {
    let response = new productsModel();
    let result = await response.list();
    return result;
}

module.exports.findProduct = async (productId) => {
    let response = new productsModel();
    let result = await response.find(productId);
    return result;
}

module.exports.updateProduct = async (product) => {
    let response = new productsModel();
    let result = await response.update(product);
    return "Disponibilidad de producto modificada.";
}

module.exports.deleteProduct = async (productId) => {
    let response = new productsModel();
    let result = await response.delete(productId);
    return "Producto eliminado.";
}