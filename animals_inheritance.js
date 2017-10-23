"use strict"

class Animal {
  constructor(num_legs = 2, is_warm_blooded = true) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded;
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision() {
    console.log('laser vision');
  }

  be_invisible() {
    console.log('invisible');
  }
}

class Cat extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Elephant extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}

class Chicken extends Animal {
    constructor(num_legs, is_warm_blooded) {
      super(num_legs, is_warm_blooded);
      this.superPower = new SuperPower();
    }
  }

class Cow extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
    this.superPower = new SuperPower();
  }
}


let hewan = new Animal();
console.log(hewan.num_legs); 

let ayam = new Chicken();
console.log(ayam.num_legs); 
console.log(ayam.is_warm_blooded); 

let kucing = new Cat(4, false);
console.log(kucing.num_legs); 
console.log(kucing.is_warm_blooded); 

let sapi = new Cow(4, false);
console.log(sapi.num_legs); 
console.log(sapi.is_warm_blooded); 

let gajah = new Elephant();
gajah.superPower.be_invisible(); 

let orangUtan = new Chimpanzee(2, true);
console.log(orangUtan.num_legs);
console.log(orangUtan.is_warm_blooded); 
orangUtan.superPower.be_invisible(); 