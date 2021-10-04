const HTMLResponse = document.querySelector(".mProductos");
async function getItems() {
  HTMLResponse.innerHTML=""
  let url = await fetch("http://localhost:3000/viewLogin");
  const data = await url.json(url);
  let item_M = data;
  console.log(item_M);
  let tpl = ``;
  for (let i = 0; i < 15; i++) {
    tpl = `
    <tr> 
    <td scope="row">${data[i].idUsuario}</td>
    <td>${data[i].nombre}</td>
    <td>${data[i].apellido}</td>
    <td>${data[i].email}</td>
  </tr>
    `;
    HTMLResponse.innerHTML += `${tpl}`;
  }
}
const searchByIdUser=async()=> {

  const HTMLResponse = document.querySelector(".idUsuarios");
  HTMLResponse.innerHTML=""
  let item =document.getElementById("idUserById").value.toLowerCase();
  let searching = await fetch("http://localhost:3000/login/"+item);
  const data = await searching.json(searching);
  let item_M = data;
  console.log(item_M.nombre);
  let tpl = ``;
  for (let i = 0; i < 1; i++) {
    tpl = `
    <tr> 
    <td scope="row">${item_M.idUsuario}</td>
    <td>${item_M.nombre}</td>
    <td>${item_M.apellido}</td>
    <td>${item_M.email}</td>
  </tr>
    `;
    HTMLResponse.innerHTML += `${tpl}`;
  }
}
const searchByDelete=async()=> {
    
  const HTMLResponse = document.querySelector(".idUsuarios");
  HTMLResponse.innerHTML=""
  let item =document.getElementById("idUserDelete").value.toLowerCase();
  console.log(item);
  let searching = await fetch("http://localhost:3000/deleteLogin/"+item, {
    method: "DELETE",
    mode: "cors"
  }).then(response =>{ console.log("Todo salio bien ",response.ok)
  if (!response.ok) {
    alert("Hubo un error no se encuentra el id")
  }
});
}
const updatePassword=async()=> {
    
  let itemId =document.getElementById("idUserUpdate").value.toLowerCase();
  let itemPassword =document.getElementById("idUserUpdatePassword").value.toLowerCase();

  let dataUpdate = {
    idUsuario: itemId,
    userPasword: itemPassword
};
  let searching = await fetch("http://localhost:3000/updateLogin", {
    method: "POST",
    mode: "cors",
    headers: {
       "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  }).then(response =>{ console.log("Todo salio bien ",response.ok)
  if (!response.ok) {
    alert("Hubo un error no se encuentra el id")
  }
});
}
const createUser=async()=> {
  let itemName =document.getElementById("name").value.toLowerCase();
  let itemLastName =document.getElementById("lastName").value.toLowerCase();
  let itemEmail =document.getElementById("email").value.toLowerCase();
  let itemPassword =document.getElementById("secretPassword").value.toLowerCase();

  let dataUpdate = {
    myName: itemName,
    lastName:itemLastName,
    email:itemEmail,
    itemPassword:itemPassword
};
  let searching = await fetch("http://localhost:3000/createLogin", {
    method: "POST",
    mode: "cors",
    headers: {
       "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  }).then(response =>{ console.log("validacion")
  if (!response.ok) {
    alert("Hubo un error no se encuentra el id")
  }
});
}