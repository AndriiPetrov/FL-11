class Fighter {
  constructor(obj) {
      this.obj = obj
      this.wins = 0;
      this.losses = 0;
      this.onehundredPercent = 100;
  } 

  getName() {
    this._name = this.obj.name;
    return this._name;
  }
  
  getDamage() {
    this._damage = this.obj.damage;
    return this._damage;
  }

  getAgility() {
    this._agility = this.obj.agility;
    return this._agility;
  }

  getHealth() {
    this._hp = this.obj.hp;
    return this._hp;
  }
  
  attack(anotherFighter) {
    let successPropability = this.onehundredPercent - anotherFighter.agility;
    let isDamageSuccess = Math.floor(Math.random() * this.onehundredPercent + 1) <= successPropability;
    
    if (isDamageSuccess) {
      return `${this.getName()} make ${this.getDamage()} to ${anotherFighter.getName()}`
    } else {
      `${this.getName()} attack missed`
    }
  }

  logCombatHistory() {
    return `Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`
  }
  
  heal(hp) {
    if (this._hp + hp > this.obj.hp) {
      this._hp = this.obj.hp;
    } else {
      this._hp += hp;
    }
  }

  dealDamage(hp) {
    if (this._hp - hp > 0) {
      return this._hp;
    } else {
      this._hp = 0;
      return this._hp
    }
  }

  addWin() {
    this.wins += this.wins;
  }

  addLoss() {
    this.losses += this.losses
  }
}

let figher1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25}) 
let figher2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40}) 

console.log(figher1.getName());