// 0.
function getNumbers(stringParam) {
  let arrayOfNumbers = [];

  for (let i = 0; i < stringParam.length; i++) {
    if (!isNaN(parseInt(stringParam[i]))) {
      arrayOfNumbers.push(parseInt(stringParam[i]));
    }
  }

  return arrayOfNumbers;
}

getNumbers('string');
getNumbers('n1um3ber95');

// 1.
function findTypes() {
  let objectOfTypes = new Object();

  for (let i = 0; i < arguments.length; i++) {
    let typeOfProperty = typeof(arguments[i]);
    if (objectOfTypes.hasOwnProperty(typeOfProperty)) {
      objectOfTypes[typeOfProperty] += 1;
    } else {
      objectOfTypes[typeOfProperty] = 1;
    }
  }

  return objectOfTypes;
}

findTypes('number');
findTypes(null, 5, 'hello');

// 2.
function executeforEach(array, executionFunction) {
  for (let i = 0; i < array.length; i++) {
    executionFunction(array[i]);
  }
}

executeforEach([1,2,3], function(el) { console.log(el) });

// 3.
function mapArray(array, executionFunction) {
  executeforEach(array, executionFunction);
}

// function executeforEach(array, executionFunction) {
//   let arrayMap = [];
//   for (let i = 0; i < array.length; i++) {
//     if (executionFunction(array[i]) !== 'undefined') {
//       arrayMap[i] = executionFunction(array[i]);
//       if(array.length - 1) {
//         return arrayMap;
//       }
//     }
//   } 
// }

// function mapArray(array, executionFunction1) {
//   let arrayMap;
//   arrayMap = executeforEach(array, executionFunction1);
//   return arrayMap;
// }

// console.log(executeforEach([1,2,3], function(el) { console.log(el); }))
// // console.log(mapArray([2, 5, 8], function(el) { return el + 3; }) );

mapArray([2, 5, 8], function(el) { return el + 3 }) 