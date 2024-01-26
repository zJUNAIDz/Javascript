//* This is demonstration of how proxy works
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
