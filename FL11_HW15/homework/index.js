function Hamburger(type, calories, isAddSecretIngredient) {
  this.type = type;
  
  let _calories = calories;
  let _counterForAddingCheese = 0;
  let _counterForAddingTomato = 0;

  let _initialCalories = calories;
  let _counterForAddingSecretIngredient = 0;

  let _isAddSecretIngredient = isAddSecretIngredient;
  if (_isAddSecretIngredient === undefined) {
    _isAddSecretIngredient = true;
  } else {
    _isAddSecretIngredient = Boolean(isAddSecretIngredient);
  }

  let _bitCounter = 0;

  this.getCalories = function() {
    return _calories
  }
  this.setCalories = function(calories) {
    return _calories = calories;
  }

  this.addCheese = function() {
    if (_counterForAddingCheese === 0) {
      _counterForAddingCheese++;
      _calories += 120;
    } else {
      console.log('Sorry, you can add cheese only once');
    }
  }

  this.addTomato = function() {
    if (_counterForAddingTomato < 2) {
      _counterForAddingTomato++;
      _calories += 20; 
    } else {
      console.log('Sorry, you can add tomato only twice.');
    }
  }

  this.addSecretIngredient = function() {
    if (_initialCalories === _calories && _counterForAddingSecretIngredient === 0 && _isAddSecretIngredient) {
      _counterForAddingSecretIngredient++;
      _calories += 100;
    } else if ((_initialCalories !== _calories && _counterForAddingSecretIngredient > 0) || !_isAddSecretIngredient) {
      console.log('Sorry, you can add secret ingredient only once.');
    } else if (_initialCalories !== _calories && _counterForAddingSecretIngredient === 0) {
      console.log('Sorry, you can add ingredient only before another ingredient');
    }
  }

  this.bite = function() {
    _bitCounter++;

    this.addTomato = function() {
      console.log('Sorry, you cannot add tomato');
    }
    this.addCheese = function() {
      console.log('Sorry, you cannot add cheese');
    }
    this.addSecretIngredient = function() {
      console.log('Sorry, you cannot add secretIngredient');
    }
  }

  this.info = function() {
    let str = "Classic hamburger: ";

    str += _counterForAddingSecretIngredient > 0 ? 'with secret ingredient, ' : '';
    str += _counterForAddingCheese > 0 ? 'with cheese, ' : '';
    str += _counterForAddingTomato > 0 ? `with ${_counterForAddingTomato} tomato, ` : '';
    str += _bitCounter > 0 ? `is bit ${_bitCounter} times. ` : '';

    if (str[str.length - 2] === ',') {
      str = str.slice(0, str.lastIndexOf(',')) + '. ';
    }

    str += `Total calories: ${_calories}.`;

    return str;
  }
}

// 1
// let myHamburger = new Hamburger('classic', 600);
// console.log(myHamburger);

// 2
// let myHamburger = new Hamburger('classic', 600);
// console.log(myHamburger);

// console.log(myHamburger.getCalories());
// myHamburger.setCalories(700);
// console.log(myHamburger.getCalories());

// 3
// let myHamburger = new Hamburger('classic', 600);
// myHamburger.addCheese();
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();

// 4
// let myHamburger = new Hamburger('classic', 600);
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();

// 5
// let myHamburger = new Hamburger('classic', 600);
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());
// myHamburger.addSecretIngredient();

// let myHamburger = new Hamburger('classic', 600);
// myHamburger.addTomato();
// myHamburger.addSecretIngredient();

// 6
// let myHamburger = new Hamburger('classic', 600, false);
// myHamburger.addSecretIngredient();

// let myHamburger = new Hamburger('classic', 600, true);
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());

// 7
// let myHamburger = new Hamburger('classic', 600);
// myHamburger.addSecretIngredient();
// console.log(myHamburger.getCalories());
// myHamburger.addTomato();
// console.log(myHamburger.getCalories());
// myHamburger.addCheese();
// console.log(myHamburger.getCalories());

// myHamburger.bite();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.addTomato();
// myHamburger.addCheese();
// myHamburger.addSecretIngredient();

// 8
// let myHamburger = new Hamburger('classic', 600);
// myHamburger.addSecretIngredient();
// myHamburger.addTomato();
// myHamburger.addCheese();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.bite();
// console.log(myHamburger.info());

// myHamburger.addTomato();
// console.log(myHamburger.info());
// myHamburger.addCheese();
// console.log(myHamburger.info());
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.bite();
// console.log(myHamburger.info());
