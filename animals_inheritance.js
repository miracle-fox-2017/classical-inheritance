"use strict"

class Animal{
  constructor(){
    this.num_legs = 2;
    this.is_warm_blooded = true;
  }

}

class Frog extends Animal{
  constructor(){
    super();
    this.num_legs = 4;
    this.is_warm_blooded = false;
  }
}

class Bat extends Animal{
  constructor(){
    super();
    this.num_legs = 2;
  }
}

class Chimpanze extends Animal{
  constructor(){
    super();
    this.num_legs = 2;
  }
}

class Fox extends Animal{
  get superpower(){
    return new SuperPower();
  }
}

class Chicken extends Animal{
  constructor(){
    super();
    this.num_legs = 2;
  }
}

class SuperPower {
  use_laser_vision(){
    return 'menggunakan laser vision';
  }

  be_invisible(){
    return 'invisible mode activate';
  }

  xRay(){
    return 'x ray vision activate';
  }
}

let Ayam = new Chicken();
console.log(Ayam);
let Kodok = new Frog();
console.log(Kodok);
let fox = new Fox();
console.log(fox);

console.log(fox.superpower.use_laser_vision());
console.log(fox.superpower.be_invisible());
console.log(fox.superpower.xRay());
// console.log(Kodok.superpower.use_laser_vision()); //error
