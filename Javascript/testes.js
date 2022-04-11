// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

let totalItems = parseInt(10);
let pares = [];
let impares = [];

for (let i = 0; i < totalItems; i++) {
  let number = parseInt(5);
  if (number % 2 === 0){
    pares.push(number);
  }
  else {
    impares.push(number);
  }
}
pares.sort((a, b) =>    a+b   );
impares.sort((a, b) =>   a+b     );

for(let i = 0; i < pares.length;i++){
  console.log(    pares[i]    )
}
for(let i = 0; i < impares.length;i++){
  console.log(     impares[i]     )
}