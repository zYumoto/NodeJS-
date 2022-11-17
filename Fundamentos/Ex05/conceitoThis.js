// conceito This
// para que objeto  o this aponta para quando eu coloco ele dentro de um modulo do node ?

// this nao aponta para escopo global
console.log(global === this);

// this nao aponta para module
console.log(module === this);

//this aponta para o module.exports que um objeto que sera exposto para outros que requererem o modulo
console.log(module.exports === this);

//exportando a funcao this
this.digaOi = function () {
  console.log("Oiiii!!!");
};