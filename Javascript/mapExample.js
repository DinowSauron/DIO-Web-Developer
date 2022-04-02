function getAdmins(map) {
  let admins = [];
  for([key, value] of map) {
    if(value === "Admin") {
      admins.push(key)
    }
  }

  return admins
}

const usuarios = new Map();
usuarios.set("luiz", 'Admin')
usuarios.set("stephany", 'Admin')
usuarios.set("jorge", 'User')
usuarios.set("natalia", 'Admin')


console.log(usuarios.se)