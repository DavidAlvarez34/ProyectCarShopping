const crearPButton = document.querySelector(".btnCrear");
crearPButton.addEventListener('click', crearButtonClicked);

const modificarPButton = document.querySelector(".btnModificar");
modificarPButton.addEventListener('click', modificarButtonClicked);

const eliminarPButton = document.querySelector(".btnEliminar");
eliminarPButton.addEventListener('click', eliminarButtonClicked);

const buscarPButton = document.querySelector(".btnBuscar");
buscarPButton.addEventListener('click', buscarButtonClicked);

const mostrarPButton = document.querySelector(".btnMostrar");
mostrarPButton.addEventListener('click', mostrarButtonClicked);

function crearButtonClicked() {
    async function createProduct() {
        // let url = await fetch('http://localhost:3000/createProducts');
        // const data = await url.json(url);
        // console.log(data);
    }
    createProduct();
}

function modificarButtonClicked() {
    async function updateProduct() {
        // let url = await fetch('http://localhost:3000/updateProducts');
        // const data = await url.json(url);
        // console.log(data);
    }
    updateProduct();
}

function eliminarButtonClicked() {
    async function deleteProduct() {
        const id = document.getElementById('idProductE'); //obtener el id
        const idProduct = String(id.value); //obtener el valor

        let url = await fetch('http://localhost:3000/deleteProducts/'+idProduct);
        console.log(url);
        const data = await url;
        console.log(data);
    }
    deleteProduct();
}

function buscarButtonClicked() {
    async function getProductId() {
        const id = document.getElementById('idProductB'); //obtener el id
        const idProduct = String(id.value); //obtener el valor

        const HTMLResponse=document.getElementById('nameB');
        let url = await fetch('http://localhost:3000/product/'+idProduct);
        console.log(url);
        const data = await url.json();
        console.log(data);
        // let tpl=``;
        // tpl=`${data.name}`
        // HTMLResponse.innerHTML +=`${tpl}`; 
    }
    getProductId();
}

function mostrarButtonClicked() {
    async function getProducts() {
        const HTMLResponse=document.querySelector('.mProductos');
        let url = await fetch('http://localhost:3000/products');
        const data = await url.json(url);
        //console.log(data)
        let tpl=``;
        for (let i= 0; i < data.length; i++) {
           tpl=`
              <tr> 
                <td scope="row">${data[i].idProduct}</td>
                <td>${data[i].name}</td>
                <td>${data[i].brand}</td>
                <td>${data[i].model}</td>
                <td>${data[i].description}</td>
                <td>${data[i].price}</td>
                <td>${data[i].available}</td>
              </tr> `
           HTMLResponse.innerHTML +=`${tpl}`;
        } 
    }
    getProducts();
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
})()