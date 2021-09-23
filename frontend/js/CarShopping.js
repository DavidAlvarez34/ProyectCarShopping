class ShoppingCart {
  constructor() {
    this.shoppingCartItemsContainer = document.querySelector(".shoppingCartItemsContainer");
  }

  inform(mensaje) {
    console.log(mensaje);
  }

  startArticle() {
    const HTMLResponse=document.querySelector('.hola');
    async function getItems() {
      let url = await fetch('http://localhost:3000/startMl');
      const data = await url.json(url);
      let item_M = data['results'];
      let tpl=``;
      //console.log(articles.results);
      for (let i= 0; i < 15; i++) {
        tpl=`
        <div class="card shadow-sm item" id="cards">
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

      const comprarButton = document.querySelector(".comprarButton");
      comprarButton.addEventListener('click', comprarButtonClicked);

      const addToShoppingCartButtons = document.querySelectorAll(".addToCart");
      addToShoppingCartButtons.forEach((addToCartButton) => {
        addToCartButton.addEventListener('click', addToCartClicked);
      });

      function addToCartClicked(event) {
        const button = event.target;
        const item = button.closest('.item');
        
        const itemTitle = item.querySelector('.item-title').textContent;
        const itemPrice = item.querySelector('.item-price').textContent;
        const itemImage = item.querySelector('.item-image').src;
      
        addArticle(itemTitle, itemPrice, itemImage);
      } 

      function addArticle(itemTitle, itemPrice, itemImage) {
        const shoppingCartItemsContainer = document.querySelector(
          '.shoppingCartItemsContainer'
        );
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
        shoppingCartItemsContainer.append(shoppingCartRow);
        //detectar elemento x para eliminar un producto del carrito
        shoppingCartRow
          .querySelector(".buttonDelete")
          .addEventListener("click", removeArticle);
    
        shoppingCartRow
          .querySelector(".shoppingCartItemQuantity")
          .addEventListener("change", quantityChange);
    
        console.log("Producto añadido")
        getTotal();
      }

      function getTotal() {
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

      function removeArticle(event) {
        const buttonClicked = event.target; //captura el evento
        buttonClicked.closest(".shoppingCartItem").remove(); //elimina el elemento
        //updateShoppingCartTotal();//actualiza los precios
      }

      //Funcion para que los numeros sean positivos
      function quantityChange(event) {
        const input = event.target;
        //validar para no bajar a cero
        input.value <= 0 ? (input.value = 1) : null;
      }

      function comprarButtonClicked() {
        shoppingCartItemsContainer.innerHTML = '';
        //updateShoppingCartTotal();
      }
    }
    getItems();

    /*async function buscar(){
      const HTMLResponse=document.querySelector('.hola');
      let item = document.getElementById("itemSearch").value;
      let url = "https://api.mercadolibre.com/sites/MLM/search?q="+item;
      let res = await fetch(url);
      const data = await res.json();
      let item_M = data['results'];
      console.log(item_M);
      let tplb=``;
      //console.log(articles.results);
      for (let i= 0; i < 15; i++) {
        tplb=`
        <div class="card shadow-sm item" id="cards">
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
        HTMLResponse.innerHTML +=`${tplb}`;
      } 
    }
    buscar();*/
  }

  // emptyCart() {
  //   for (let i = this.articles.length; i > 0; i--) {
  //     this.articles.pop();
  //   }
  // }
}

const carrito = new ShoppingCart();
carrito.startArticle();