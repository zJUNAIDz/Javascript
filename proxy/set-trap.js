//* set trap demonstration 
//* Set trap should return boolean. sets value if returns true, returns TypeError otherwise.
//* @params
//* target – is the target object, the one passed as the first argument to new Proxy ,
//* property – property name,
//* value – property value,
//* receiver – same as in get trap, only matters if the property is a setter.


let numbers = [];
numbers = new Proxy(numbers, {
  set(target, prop, val) {//*To intercept writing properties
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    }
    return false;
  }
})
numbers.push(1);
numbers.push(3);
try {
  numbers.push("e")
} catch (e) {
  console.error(e);
}