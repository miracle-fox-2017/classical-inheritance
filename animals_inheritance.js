"use strict"
class Animal {
  constructor() {
    this.num_legs = 4;
    this.herbivor = true;
    this.mamals = true
    this.superpower = new SuperPower()
  }
}

class Tiger extends Animal {
  constructor() {
    super();
    this.herbivor = false;
    this.color = 'orange';
  }
}

class Cow extends Animal {

}

class Chicken extends Animal {
  constructor() {
    super();
    this.num_legs = 2;
    this.mamals = false;
  }
}

class SuperPower {
  use_laser_vision(){
    return 'Laser Vision !!!!! ciuuuuuuuwwwwwww..........!!!!'
  }
  be_invisible(){
    return 'I\'m am The invisible'
  }
  power_cow(){
    return 'Moooooooooooooooooooooooooooo.............!!!!!'
  }
}


let animal = new Animal();
let tiger = new Tiger();
let cow = new Cow();
let chicken = new Chicken();
// let superpower = new SuperPower();

console.log('Hihhihihi'+tiger.superpower.be_invisible()+'Tiger');
console.log('----------------------------------------------------');
console.log('Chicken Star attack => '+chicken.superpower.use_laser_vision());
console.log('----------------------------------------------------');
console.log('Cow '+cow.superpower.power_cow());
