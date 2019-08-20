'use strict';

function create(objPrototype, propertiesObj) {
  let obj = {};

  if (objPrototype === null) {
    Object.setPrototypeOf(obj, Object.prototype)
  } else {
    obj.__proto__ = objPrototype;
  }

  
  Object.assign(obj, propertiesObj);

  return obj;
}

const obj1 = {prop: 5};
const obj2 = create(obj1);
console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);
console.log(obj2);