const readline = require('readline-sync');

class Pila {
  constructor() {
    this.primero = null;
    this.ultimo = null;
    this.largo = 0;
  }

  insertar(val) {
    const nodo = new Nodo(val);

    if (this.largo === 0) {
      this.primero = nodo;
    } else {
      const ultimo = this.ultimo;
      nodo.anterior = ultimo;
    }
    this.ultimo = nodo;
    this.largo++;
    return this;
  }

  quitar() {
    if (!this.primero) return null;
    const ultimo = this.ultimo;
    if (this.largo === 1) {
      this.primero = null;
      this.ultimo = null;
    } else {
      this.ultimo = this.ultimo.anterior;
    }
    this.largo--;
    return ultimo;
  }
}

class Nodo {
  constructor(val) {
    this.val = val;
    this.anterior = null;
  }
}

const arreglo = [1, 34, 445, 3, 12, 100, 42];
const pila = new Pila();

arreglo.forEach((element) => pila.insertar(element));


function Reemplazar(pila, nuevo, viejo) {
  const pilaAux = new Pila();
  while (pila.largo > 0 ) {
    const { val } = pila.quitar();
    const valor = val === viejo ? nuevo : val;
    pilaAux.insertar(valor);
  }
  while (pilaAux.largo > 0 ) {
    const { val } = pilaAux.quitar();
    console.log(val);
    pila.insertar(val);
  }

}

Reemplazar(pila, 666, 3);



