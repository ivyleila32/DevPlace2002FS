function sumarecursivaLista(valores){
   if(valores.length === 1){
    return valores[0]
  
   }
  else{
    return valores.pop(0) + sumarecursivaLista(valores);
  }
}
console.log(sumarecursivaLista([1,2,3,4,5])) //15 
