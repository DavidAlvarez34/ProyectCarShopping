const productController = require('../controller/productsController')

module.exports = async (app) => {
    //Crear productos
    app.post('/createProducts',async(req,res) => {
        let product = req.body;
        res.send(await productController.createProduct(product));
    });
    //Mostrar productos
    app.get('/products',async(req,res) => {
        res.send(await productController.listProducts());
    });
    //Enctontrar productos por ID
    app.get('/product/:id',async(req,res) => {
        let productId = req.params.id
        res.send(await productController.findProduct(productId));
    });
    //Modificar disponibilidad de productos
    app.post('/updateProducts',async(req,res) => {
        let product = req.body;
        res.send(await productController.updateProduct(product));
    });
    //Eliminar productos
    app.delete('/deleteProducts/:id',async (req, res) => {
        let productId = req.params.id
        res.send(await productController.deleteProduct(productId));
    })
};