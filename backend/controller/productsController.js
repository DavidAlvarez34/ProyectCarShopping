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
    if (result) {
        return result;
    } else {
        return "El producto no existe."
    }
}

module.exports.updateProduct = async (product) => {
    let response = new productsModel();
    let result = await response.update(product);
    if (result != '') {
        return "Disponibilidad de producto modificada.";
    } else {
        return "El producto no existe."
    }
}

module.exports.deleteProduct = async (productId) => {
    let response = new productsModel();
    let result = await response.delete(productId);
    if (result != '') {
        return "Producto eliminado.";
    } else {
        return "El producto no existe."
    }
}