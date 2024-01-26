//* This is demonstration of how proxy works
//* Example 1:
let users = {
  junaid: "junaid",
  shaikh: "Shaikh"
}

//make sure to overwrite actual object to avoid messing up due to referencing 
//*new Proxy(target,handler)
//* Here, we have set a get trap
users = new Proxy(users, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return "no such value exist";
  }
});



console.log(users['hmm'])
console.log(users['junaid'])


//*Example 2:
//* consider it a dictionary
let dictionary = {
  'hello': "Bonjour",
  'bye': "adios",
}

//* overrwriting object as proxy
dictionary = new Proxy(dictionary, {
  get(target, prop) {//intercepts reading property from dictionary
    if (prop in target) {
      return target[prop];

    }
    return prop;
  }
});

console.log(dictionary['hello'])
console.log(dictionary['bye'])
console.log(dictionary['Yo'])//*must return 'Yo'
