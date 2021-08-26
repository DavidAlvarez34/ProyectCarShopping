// For para añadir los productos
let products = document.getElementById("products");
for (let i = 0; i < 15; i++) {
    var contenedor = document.createElement("div");
    contenedor.setAttribute("id", "p" + i);
    var algunTexto = "Algún texto";
    let producto = `
    <div class="card shadow-sm" id="cards">
        <img class="item-image" src="./img/cartel-cosmeticos-corporales-carbon-bambu_1284-20759.jpg" alt="">
        <div class="card-body">
            <p class="card-text item-title">This is shampoo</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary addToCart"><i class="fas fa-cart-plus"></i> Agregar al carrito</button>
                </div>
                <small class="text-muted item-price">$35.65</small>
            </div>
        </div>
    </div> `;

    contenedor.innerHTML += producto
    products.appendChild(contenedor)
}


class ShoppingCart {
    addToShoppingCartButtons;
    shoppingCartItemsContainer;
    comprarButton;
    constructor() {
      this.addToShoppingCartButtons = document.querySelectorAll(".addToCart");
      this.shoppingCartItemsContainer = document.querySelector(
        ".shoppingCartItemsContainer"
      );
     this.comprarButton = document.querySelector('.comprarButton');
    }
  
    inform(mensaje) {
      console.log(mensaje);
    }
    startArticle() {
      this.addToShoppingCartButtons.forEach((addToCartButton) => {
        //creamos una funcion por cada click
        addToCartButton.addEventListener("click", (event) => {
          const button = event.target; //es una referencia al objeto en el cual se lanzo el evento.
          const item = button.closest(".item"); //devuelve el ascendiente más cercano al elemento actual
          //obtener el texto de una etiqueta html
          const itemImage = item.querySelector(".item-image").src;
          const itemTitle = item.querySelector(".item-title").textContent;
          const itemPrice = item.querySelector(".item-price").textContent;
          this.addArticle(itemTitle, itemPrice, itemImage);
        }); //que este a la escucha
      });
    }
    addArticle(itemTitle, itemPrice, itemImage) {
      const shoppingCartRow = document.createElement("div");
      //cambiar los elementos
      const shoppingCartContent = `
     <div class="row shoppingCartItem">
                      <div class="col-6">
                          <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                              <img src='${itemImage}' class="shopping-cart-image" width="80px" height="80px">
                              <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}
                              </h6>
                          </div>
                      </div>
                      <div class="col-2">
                          <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                              <p class="item-price mb-0 shoppingCartItemPrice text-center">${itemPrice}</p>
                          </div>
                      </div>
                      <div class="col-4">
                          <div
                              class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                              <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                  value="1">
                              <button class="btn btn-danger buttonDelete" type="button">X</button>
                          </div>
                      </div>
                  </div>`;
      //insertar el elemento en el html
      shoppingCartRow.innerHTML = shoppingCartContent;
      this.shoppingCartItemsContainer.append(shoppingCartRow);
      //detectar elemento x para eliminar un producto del carrito
      shoppingCartRow
        .querySelector(".buttonDelete")
        .addEventListener("click", this.removeShoppingCartItem);
  
      shoppingCartRow
        .querySelector(".shoppingCartItemQuantity")
        .addEventListener("change", this.quantityChange);
  
      //this.articles.push(article);
      this.getTotal();
    }
    removeShoppingCartItem(event) {
      const buttonClicked = event.target; //captura el evento
      buttonClicked.closest(".shoppingCartItem").remove(); //elimina el elemento
      //updateShoppingCartTotal();//actualiza los precios
    }
    getTotal() {
      let total=0;
      const shoppingCartTotal=document.querySelector('.shopping-cart-total');
      const shoppingCartItems=document.querySelectorAll('.shoppingCartItem')//selecciona a todos los elementos que tengan la clase
      //obtenemos el precio
      shoppingCartItems.forEach(shoppingCartItem=>{
          const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')
          //transforma a texto y quita el signo del euro por vacio para convertir a numero y poder sumar
          const shoppingCartItemPrice=Number(shoppingCartItemPriceElement.textContent.replace('$',''));//obtener el texto        
          const shoppingCartItemQuantityElement=shoppingCartItem.querySelector('.shoppingCartItemQuantity');//obtener el input
          //obtener el valor
          const shoppingCartItemQuantity=Number( shoppingCartItemQuantityElement.value);
          //calcula el total de todos los productos
          total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
          
      });
      //agregar el total
      shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`
      console.log(total);
    }
    //Funcion para que los numeros sean positivos
    quantityChange(event){
      const input=event.target;
      //validar para no bajar a cero
      /*if (input.value<=0){
          input.value=1
      }*/
      //con ternarios
      input.value <= 0 ? (input.value=1):null;
  }
    removeArticle() {
      this.articles.pop();
      this.getTotal();
    }
  
    pay() {
      this.comprarButton.addEventListener('click',()=>{
          this.shoppingCartItemsContainer.innerHTML='';
          this.getTotal();//actualiza el total
      });
    }
  
    emptyCart() {
      for (let i = this.articles.length; i > 0; i--) {
        this.articles.pop();
      }
    }
  }
  
  const carrito = new ShoppingCart();
  carrito.startArticle();
  carrito.pay()

  //const addToShoppingCartButtons = document.querySelectorAll('.addToCart');//Busca el boton que añade al elemento
  
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






 // class ShoppingCart {
    //     constructor(nombre) {
    //         this.nombre = nombre;
    //         this.articles = [];
    //         this.total = 0;
    //         this.pagado = false;
    //     }
    
    //     inform(mensaje) {
    //         console.log(mensaje)
    //     }
    
    //     addArticle(article) {
    //         this.articles.push(article);
    //         this.getTotal();
    //     }
    
    //     getTotal() {
    //         var total = 0;
    //         for (let i = 0; i < this.articles.length; i++) {
    //             const articlesInCart = this.articles[i];
    //             var total = total + articlesInCart[1]
    //         }
    //         this.total = total;
    //     }
    
    //     removeArticle(){
    //         this.articles.pop();
    //         this.getTotal();
    //     }
    
    //     pay(){
    //         if (!this.pagado) {
    //             this.pagado = true;
    //             this.total = 0;
    //             this.inform('Se ha realizado el pago con éxito.');
    //             this.emptyCart();
    //         } else{
    //             this.inform('El pago ya fue realizado.');
    //         }
    //     }
    
    //     emptyCart(){
    //         for (let i = this.articles.length; i > 0; i--) {
    //             this.articles.pop();
    //         }
    //     }
    // }