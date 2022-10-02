const readline = require('readline-sync');
const n = Number(readline.question('Ingrese el numero a verificar: '));

// chekear si se ingreso un numero vaildo o no
let listaEnt =[1,3,67,89,78,34,80,32,56,12,34,89,34];


listaEnt.forEach(function(valor, i) {
  // console.log(`${i}`);
  if(valor == n){
   listaEnt.splice(i, 1);
   console.log(`se borro el elemento ${i}`);
  } 
})
console.log(listaEnt);