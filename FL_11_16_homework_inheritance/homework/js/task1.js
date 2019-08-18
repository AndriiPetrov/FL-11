'use strict';

function assign(target) {
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] === null || arguments[i] === undefined) {
      continue;
    } 

    for (let key in arguments[i]) {
      target[key] = arguments[i][key];
    }
  }

  return target;
}

let obj = assign({}, {a: 1}, {a: 3, b: 2});
console.log(obj);