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

//getNumbers('string');
//getNumbers('n1um3ber95');

// 1.
function findTypes() {
  let objectOfTypes = new Object();

  for (let i = 0; i < arguments.length; i++) {
    let typeOfProperty = typeof arguments[i];
    if (objectOfTypes.hasOwnProperty(typeOfProperty)) {
      objectOfTypes[typeOfProperty] += 1;
    } else {
      objectOfTypes[typeOfProperty] = 1;
    }
  }

  return objectOfTypes;
}

//findTypes('number');
//findTypes(null, 5, 'hello');

// 2.
function executeforEach(array, executionFunction) {
  let arrayOfElements = [];

  for (let i = 0; i < array.length; i++) {
    if(executionFunction(array[i])) {
      arrayOfElements.push(array[i]);

      if(array.length - 1 === i) {
        return arrayOfElements;
      }
    }
  }
}

//executeforEach([1,2,3], function(el) { console.log(el) });

// 3.
function mapArray(array, executionFunction) {
  for (let i = 0; i < array.length; i++) {
    array[i] = executionFunction(array[i]);
  }

  return array;
}

//mapArray([2, 5, 8], function(el) { return el + 3 } );

// 4.
function filterArray(array, executionFunction) {
  array = executeforEach(array, executionFunction);

  return array;
}

//filterArray([2, 5, 8], function(el) { return el > 3 }) 

// 5.
function showFormattedDate(date) {
  let startWith = 4;
  let endWith = 15
  let dateTime = date.toString().slice(startWith, endWith);

  return `Date: ${dateTime}`;
}

//showFormattedDate(new Date('2019-01-27T01:10:00'));

// 6.
function canConvertToDate(date) {
  let dateTime = new Date(date).toString();

  return dateTime !== 'Invalid Date';
}

//canConvertToDate(‘2016-13-18T00:00:00’) 
//canConvertToDate(‘2016-03-18T00:00:00’) 

// 7.
function daysBetween(date1, date2) {
  date1 = date1.getTime()
  date2 = date2.getTime()

  const millisecondsOnMinute = 1000;
  const secondsOnMinute = 60;
  const minutesOnHour = 60;
  const hoursOnDay = 24

  return Math.round((date2 - date1) / millisecondsOnMinute / secondsOnMinute / minutesOnHour / hoursOnDay);
}

//daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))  

//8.
function getAmountOfAdultPeople(data) {
  let arrayOfDates = [];

  const adultAge = 18;
  const daysOnYears = 365;

  for (let i = 0; i < data.length; i++) {
    arrayOfDates[i] = daysBetween(new Date(data[i][' birthday ']), new Date('2019-07-16T00:00:00'));
    arrayOfDates[i] = arrayOfDates[i] / daysOnYears;
  }
  
  arrayOfDates = filterArray(arrayOfDates, function(el) { 
    return el > adultAge; 
  })
  
  return arrayOfDates.length
}

// getAmountOfAdultPeople(data) 