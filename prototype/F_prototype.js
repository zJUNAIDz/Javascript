let animal = {
  eats: true,
}
function Cat(name) {
  this.name = name;
}
Cat.prototype = animal;

let tabby = new Cat("tabby")
console.log(tabby.eats, tabby.name);