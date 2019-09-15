// your code goes here
class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = bonus;
  }

  getDiscount() {
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDay();

    let nightDiscount = 0;
    let weekendDiscount = 0;

    if ( hour >= 23 && hour <= 6 ) {
      nightDiscount = this.nightDiscount;
    }

    if ( day === 0 || day === 6 ) {
      weekendDiscount = this.weekendDiscount;
    }

    return nightDiscount + weekendDiscount;
  }

  setBonus() {
    this.bonus += 5 * Math.floor(this.orderTotalPrice / 100);
    return this.bonus;
  }

  makeOrder() {
    this.orderTotalPrice -= (this.getDiscount() + this.setBonus());
    return `Price after discount and including bonuses is ${this.orderTotalPrice}`;
  }
}

let user = new User("Robert", 200, 10, 5, 5);
console.log(user.makeOrder());