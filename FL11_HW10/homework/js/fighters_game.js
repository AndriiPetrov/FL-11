let _wins = Symbol('wins');
let _losses = Symbol('losses');
let _name = Symbol('name');
let _damage = Symbol('damage');
let _agility = Symbol('agility');
let _hp = Symbol('hp');
let _fighterObj = Symbol('fighterObj');

const oneHundredPercent = 100;

class Fighter {
  constructor(fighterObj) {
      this[_fighterObj] = fighterObj;
      this[_wins] = 0;
      this[_losses] = 0;
      this[_name] = fighterObj.name;
      this[_damage] = fighterObj.damage;
      this[_hp] = fighterObj.hp;
      this[_agility] = fighterObj.agility;
  } 

  getName() {
    return this[_name];
  }
  
  getDamage() {
    return this[_damage];
  }

  getAgility() {
    return this[_agility];
  }

  getHealth() {
    return this[_hp];
  }
  
  attack(anotherFighter) {
    let successProbability = oneHundredPercent - anotherFighter.getAgility();
    let isDamageSuccess = Math.floor(Math.random() * (oneHundredPercent + 1)) <= successProbability;
    
    if (isDamageSuccess) {
      anotherFighter.dealDamage(this.getDamage());
      return `${this.getName()} make ${this.getDamage()} to ${anotherFighter.getName()}`
    } else {
      return `${this.getName()} attack missed`
    }
  }

  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins: ${this[_wins]}, Losses: ${this[_losses]}`);
  }
  
  heal(hp = Number.MAX_SAFE_INTEGER) {
    if (this[_hp] + hp > this[_fighterObj].hp) {
      this[_hp] = this[_fighterObj].hp;
    } else {
      this[_hp] += hp;
    }
  }

  dealDamage(damageHp) {
    if (this[_hp] - damageHp > 0) {
      this[_hp] -= damageHp;
    } else {
      this[_hp] = 0;
    }
  }

  addWin() {
    this[_wins]++;
  }

  addLoss() {
    this[_losses]++;
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
    return;
  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
    return;
  }

  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    console.log(fighter1.attack(fighter2));
    
    if (fighter2.getHealth() > 0) {
      console.log(fighter2.attack(fighter1));
    } else {
      fighter2.addLoss();
      fighter1.addWin();
    }

    if (fighter1.getHealth() === 0) {
      fighter1.addLoss();
      fighter2.addWin();
    }

  }
}

let fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
let fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});

battle(fighter1, fighter2);
console.log(fighter1.getHealth());
console.log(fighter2.getHealth());
fighter1.logCombatHistory();
fighter2.logCombatHistory();
battle(fighter1, fighter2);