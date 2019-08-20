'use strict';

function Pokemon(state) {
  this.type = state.type;
  this.specie = state.specie;
  this.fly = state.fly;
  this.pokemonType = state.pokemonType;
  this.nextLevelOfAPokemon = state.nextLevelOfAPokemon;
}
Pokemon.prototype.getType = function() {
  return this.type;
}
Pokemon.prototype.getSpecie = function() {
  return this.specie;
}
Pokemon.prototype.canFly = function() {
  return this.fly;
}
Pokemon.prototype.getPokemonType = function() {
  return this.pokemonType;
}
Pokemon.prototype.evolve = function() {
  return this.nextLevelOfAPokemon;
}

function Charmander() {
  let state = {
    specie: 'Lizard Pokemon',
    fly: false,
    type: 'Fire',
    pokemonType: 'Charmander',
    nextLevelOfAPokemon: new Charmeleon()
  };
  
  Pokemon.call(this, state);
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmeleon() {
  let state = {
    specie: 'Flame Pokemon',
    fly: false,
    type: 'Fire',
    pokemonType: 'Charmeleon',
    nextLevelOfAPokemon: new Charizard()
  };

  Pokemon.call(this, state);
}
Charmeleon.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard() {
  let state = {
    specie: 'Flame Pokemon',
    fly: true,
    type: 'Fire',
    pokemonType: 'Charizard',
    nextLevelOfAPokemon: this
  };

  Pokemon.call(this, state);
}
Charizard.prototype = Object.create(Pokemon.prototype);
Charizard.prototype.constructor = Charizard;

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

console.log(charmander);
console.log(charmeleon);
console.log(charizard);

console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());

console.log(charmander.evolve());
console.log(charmander);
console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);
console.log(charizard.evolve().constructor === Charizard)

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());

function Pichu() {
  let state = {
    specie: 'Mouse Pokemon',
    fly: false,
    type: 'Electric',
    pokemonType: 'Pichu',
    nextLevelOfAPokemon: new Pikachu()
  };

  Pokemon.call(this, state);
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu() {
  let state = {
    specie: 'Mouse Pokemon',
    fly: false,
    type: 'Electric',
    pokemonType: 'Pikachu',
    nextLevelOfAPokemon: new Raichu()
  };

  Pokemon.call(this, state);
}
Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu() {
  let state = {
    specie: 'Mouse Pokemon',
    fly: false,
    type: 'Electric',
    pokemonType: 'Raichu',
    nextLevelOfAPokemon: this
  };

  Pokemon.call(this, state);
}
Raichu.prototype = Object.create(Pokemon.prototype);
Raichu.prototype.constructor = Raichu;

const pichu = new Pichu();
console.log(pichu.getPokemonType());

const pickachu = pichu.evolve();
console.log(pickachu.getPokemonType());
console.log(pickachu.constructor === Pikachu);

const raichu = pickachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

const raichu2 = raichu.evolve();
console.log(raichu2 === raichu);