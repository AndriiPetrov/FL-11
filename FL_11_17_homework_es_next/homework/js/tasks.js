'use strict';

/* Task1 */
let maxElement = (array) => Math.max(...array);
// const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
// console.log(maxElement(array));

/* Task2 */
let copyArray = (array) => [...array];
// const array = [1, 2, 3];
// const copiedArray = copyArray(array);
// console.log(array, copiedArray);
// console.log(array === copiedArray);

/* Task3 */
let addUniqueId = (obj) => {
  let id = Symbol('id');
  let newObj = {...obj};
  newObj[id] = 0;
  return newObj;
}

// let newObj = addUniqueId({name: 123});
// console.log(newObj);

/* Task4 */
let regroupObject = (oldObj) => {
  let {name: firstName, details: {id, age, university}} = oldObj;

  return { university, user: {age, firstName, id }}
}

// const oldObj = { name: 'Someone', details: {id: 1, age: 11, university: 'UNI'} }
// console.log(regroupObject(oldObj));

/* Task5 */
let findUniqueElements = array => [...new Set(array)];

// const array = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
// console.log(findUniqueElements(array));

/* Task 6 */
let hideNumber = phoneNumber => phoneNumber.replace(/\w(?=\w{4,}$)/g, '').padStart(10, '*');

// const phoneNumber = '0123456789';
// console.log(hideNumber(phoneNumber));

/* Task 7 */
let required = () => { throw new Error('Missing property') };
let add = ( first = required(), second = required() ) => first + second;

// console.log(add(1, 3));
// console.log(add(1));

/* Task 8 */