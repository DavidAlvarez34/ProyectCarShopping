const productController = require('../controller/productsController')
const validation = require('../middlewares/midd')

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
        let productToSend = await productController.findProduct(productId);
        res.send(productToSend);
    });
    //Modificar disponibilidad de productos
    app.post('/updateProducts',validation.autenticarModi,async(req,res) => {
        let product = req.body;
        res.send(await productController.updateProduct(product));
    });
    //Eliminar productos
    app.delete('/deleteProducts/:id',async (req, res) => {
        let productId = req.params.id
        res.send(await productController.deleteProduct(productId));
    })
};