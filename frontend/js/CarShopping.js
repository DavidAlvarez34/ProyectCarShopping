class ShoppingCart {
  constructor() {
    this.addToShoppingCartButtons = document.querySelectorAll(".addToCart");
    this.shoppingCartItemsContainer = document.querySelector(
      ".shoppingCartItemsContainer"
    );
    this.comprarButton = document.querySelector(".comprarButton");
  }

  inform(mensaje) {
    console.log(mensaje);
  }
  startArticle() {
    const HTMLResponse=document.querySelector('.hola');
    async function getItems() {
      
      let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1648"; //Categoría computación
      // https://api.mercadolibre.com/sites/MLM/categories poner en postman para ver las otras categorías
      let resp = await fetch(url);
      const data = await resp.json();
      //let item_M = data['results'][2]['title'];
      let item_M = data["results"];
      
      let tpl=``;
      //console.log(item_M);
      for (let i= 0; i < 15; i++) {
        tpl=`
        <div class="card shadow-sm" id="cards">
        <img class="item-image" src="${item_M[i].thumbnail}" alt="">
        <div class="card-body">
        
            <p class="card-text item-title">${item_M[i].title}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary addToCart"><i class="fas fa-cart-plus"></i> Agregar al carrito</button>
                </div>
                <small class="text-muted item-price">$ ${item_M[i].price}</small>
            </div>
        </div>
        
    </div> `
     HTMLResponse.innerHTML +=`${tpl}`;
     }
      
      
    }
    getItems();
  }
  addArticle(itemTitle, itemPrice, itemImage) {
    const shoppingCartRow = document.createElement("div");
    //cambiar los elementos
    const shoppingCartContent = `
   <div class="col-3 shoppingCartItem">
                    <div class="col-3">
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
    let total = 0;
    const shoppingCartTotal = document.querySelector(".shopping-cart-total");
    const shoppingCartItems = document.querySelectorAll(".shoppingCartItem"); //selecciona a todos los elementos que tengan la clase
    //obtenemos el precio
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        ".shoppingCartItemPrice"
      );
      //transforma a texto y quita el signo del euro por vacio para convertir a numero y poder sumar
      const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace("$", "")
      ); //obtener el texto
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        ".shoppingCartItemQuantity"
      ); //obtener el input
      //obtener el valor
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      //calcula el total de todos los productos
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    //agregar el total
    shoppingCartTotal.innerHTML = total;
    console.log(total);
  }
  //Funcion para que los numeros sean positivos
  quantityChange(event) {
    const input = event.target;
    //validar para no bajar a cero
    /*if (input.value<=0){
        input.value=1
    }*/
    //con ternarios
    input.value <= 0 ? (input.value = 1) : null;
  }
  removeArticle() {
    this.articles.pop();
    this.getTotal();
  }

  emptyCart() {
    for (let i = this.articles.length; i > 0; i--) {
      this.articles.pop();
    }
  }
}
  
  const carrito = new ShoppingCart();
  carrito.startArticle();
