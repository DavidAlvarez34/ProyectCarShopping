let Cart = {};
let Id = {
    cont: 0
}

let respuesta = {
    codigo: 200,
    error: false,
    mensaje:''
}

class Producto {
    constructor(id,nombre,cantidad,precio){
        this.id = id
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
        this.Id = Id.cont
    }
}

const nuevoProducto = function(id,nombre,cantidad,precio){
    Cart[id] = new Producto(id,nombre,cantidad,precio);
    Id.cont++
}

const buscaProducto = function (id) {
    if(Cart.hasOwnProperty(id)){//booleano id si esta
        Cart[id].cantidad ++;
        return true;
    }else{
        return false;
    } 
}

const borraProducto = function (id) {
    if(Cart.hasOwnProperty(id)){
        console.log(Cart[id]);
    if (Cart[id].cantidad  > 1) {//cantidad mayor a uno
        Cart[id].cantidad  = Cart[id].cantidad  - 1;
        return true
    } else {
        delete Cart[id]//borra los elementos que tengan ese is
        return true
     } 
    }
    else{
      return false
    }
}

module.exports = {Cart,respuesta,nuevoProducto,buscaProducto,borraProducto}