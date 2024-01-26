const animal = {
  eats: true,
}

const cat = {
  sound: "meow"
}
//* setting prototypal inheritance of cat to animal
cat.__proto__ = animal;

console.log(cat.sound);//"meow"
console.log(cat.eats);//true