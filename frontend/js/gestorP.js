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
        let nombre = document.getElementById('nameC').value;
        let marca = document.getElementById('brandC').value;
        let modelo = document.getElementById('modelC').value;
        let descripcion = document.getElementById('descriptionC').value;
        let precio = document.getElementById('priceC').value;
        let disponibilidad = document.getElementById('availableC').value;

        let dataInsert = {
            name: nombre,
            brand: marca,
            model: modelo,
            description: descripcion,
            price: precio,
            available: disponibilidad
        };
        let url = await fetch('http://localhost:3000/createProducts', {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataInsert),
        });
        alert("Producto creado");
    }
    createProduct();
}

function modificarButtonClicked() {
    async function updateProduct() {
        let idProduct = document.getElementById("idProductM").value;
        let disp = document.getElementById("availableM").value;

        let dataInsert = {
            id: idProduct,
            available: disp
        };
        let url = await fetch('http://localhost:3000/updateProducts', {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataInsert),
        });
        alert("Producto modificado");
    }
    updateProduct();
}

function eliminarButtonClicked() {
    async function deleteProduct() {
        const id = document.getElementById('idProductE'); //obtener el id
        const idProduct = String(id.value); //obtener el valor

        let url = await fetch('http://localhost:3000/deleteProducts/'+idProduct, {
            method: "DELETE"
        });
        alert("Producto eliminado");
    }
    deleteProduct();
}

function buscarButtonClicked() {
    async function getProductId() {
        const id = document.getElementById('idProductB'); //obtener el id
        const idProduct = String(id.value); //obtener el valor
        const nombre=document.getElementById('nameB');
        const marca=document.getElementById('brandB');
        const modelo=document.getElementById('modelB');
        const descripcion=document.getElementById('descriptionB');
        const precio=document.getElementById('priceB');
        const disponibilidad=document.getElementById('availableB');

        let url = await fetch('http://localhost:3000/product/'+idProduct);
        const data = await url.json();
        
        nombre.value = data.name;
        marca.value = data.brand;
        modelo.value = data.model;
        descripcion.value = data.description;
        precio.value = data.price;
        disponibilidad.value = data.available;
    }
    getProductId();
}

function mostrarButtonClicked() {
    async function getProducts() {
        const HTMLResponse=document.querySelector('.mProductos');
        HTMLResponse.innerHTML = '';
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