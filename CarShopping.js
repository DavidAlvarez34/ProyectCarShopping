class ShoppingCart {
    constructor(nombre) {
        this.nombre = nombre;
        this.articles = [];
        this.total = 0;
        this.pagado = false;
    }

    inform(mensaje) {
        console.log(mensaje)
    }

    addArticle(article) {
        this.articles.push(article);
        this.getTotal();
    }

    getTotal() {
        var total = 0;
        for (let i = 0; i < this.articles.length; i++) {
            const articlesInCart = this.articles[i];
            var total = total + articlesInCart[1]
        }
        this.total = total;
    }

    removeArticle(){
        this.articles.pop();
        this.getTotal();
    }

    pay(){
        if (!this.pagado) {
            this.pagado = true;
            this.total = 0;
            this.inform('Se ha realizado el pago con éxito.');
            this.emptyCart();
        } else{
            this.inform('El pago ya fue realizado.');
        }
    }

    emptyCart(){
        for (let i = this.articles.length; i > 0; i--) {
            this.articles.pop();
        }
    }
}

// const carrito = new ShoppingCart('Carrito');
// let camisa = ["Camisa", 350.00]
// let pantalon = ["Pantalon", 450.00]
// carrito.addArticle(camisa)
// carrito.addArticle(camisa)
// carrito.addArticle(camisa)
// carrito.getTotal();
// carrito.addArticle(camisa)
// carrito.addArticle(pantalon)
// carrito.addArticle(pantalon)
// carrito.removeArticle();
// carrito.pay();


// json = document.getElementById("json");
// json.innerHTML = "Carrito: " + JSON.stringify(carrito, undefined, 2)