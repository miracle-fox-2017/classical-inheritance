"use strict"

class SuperPower {
  constructor(attack,heal) {
    this.strike = attack;
    this.heal = heal;
  }

  doubleAttack() {
    return this.strike = 'Double Strafe';
  }

  healingCircle(l) {
    return this.heal = 'Massive Heal';
  }
}


class Animal {
  constructor(kaki, kategori) {
    this.leg = 2;
    this.category = kategori;
    this.berserk = new SuperPower('Black Sword','Bright Shield');
  }
}

class Dog extends Animal {
  constructor(kaki,kategori) {
    super(kaki,kategori);
    this.leg = 4;
  }
}

class Chicken extends Animal {
  constructor(kaki,kategori) {
    super(kaki,kategori);
  }
}

class Tiger extends Animal{
  constructor(kaki,kategori) {
    super(kaki,kategori);
    this.leg = 4;
  }
}

let anjing = new Dog(4, 'karnivora');
let ayam = new Chicken(2, 'omnivora');
let macan = new Tiger(4, 'karnivora');

anjing.berserk.doubleAttack();
console.log(anjing);
ayam.berserk.healingCircle();
console.log(ayam);
console.log(macan);
