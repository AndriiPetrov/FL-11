'use strict';

function assign(target) {
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] === null || arguments[i] === undefined) {
      continue;
    } 

    let keys = Object.keys(arguments[i]);
    let symbols = Object.getOwnPropertySymbols(arguments[i]);

    for (let j = 0; j < keys.length; j++) {
      target[keys[j]] = arguments[i][keys[j]];
    }

    for (let j = 0; j < symbols.length; j++) {
      target[symbols[j]] = arguments[i][symbols[j]];
    }
  }

  return target;
}

const defaults = {a: 123, b: 777};
const options = {a: 456};
const configs = assign({}, defaults, options);