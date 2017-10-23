'use strict'

class Animal {
  constructor (group, num_legs, is_warm_blooded, howToMove, numTail) {
    this.group = 'vertebrata';
    this.num_legs = 4;
    this.is_warm_blooded = true;
    this.howToMove = 'walk';
    this.numTail = 1;
    this.superpower = new SuperPower();
  }
}

class Frog extends Animal {
  constructor() {
    super();
    this.is_warm_blooded = false;
    this.numTail = 0;
    this.howToMove = 'jump';
  }
}

class Bat extends Animal {
  constructor() {
    super();
    this.num_legs = 2;
    this.is_warm_blooded = false;
    this.numTail = 0;
    this.howToMove = 'fly';
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super();
    this.num_legs = 2;
    this.numTail = 0;
  }
}

class Fox extends Animal {
  constructor() {
    super();
  }
}

class Chicken extends Animal {
  constructor() {
    super();
    this.num_legs = 2;
    this.is_warm_blooded = false;
  }
}

class SuperPower {
  constructor() {
    this.laser = 'off';
    this.invisible = 'off';
  }

  use_laser_vision() {
    return this.laser = 'is on';
  }

  be_invisible() {
    return this.invisible = 'is on';
  }
}

let frog = new Frog();
let bat = new Bat();
let chimpanzee = new Chimpanzee();
let fox = new Fox();
let chicken = new Chicken();

fox.superpower.use_laser_vision();
frog.superpower.be_invisible();
console.log(frog);
// console.log(bat);
// console.log(chimpanzee);
console.log(fox);
// console.log(chicken);
