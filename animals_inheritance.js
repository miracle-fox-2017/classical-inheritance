class Animal {
  constructor(name, blood) {
    this.name = name;
    this.num_legs = 2;
    this.is_warm_blooded = blood;
    this.super_power = new SuperPower(this.name);
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super('Simpanse' , false);
  }
}

class Tiger extends Animal {
  constructor() {
    super('Tiger Woods', true);
    this.num_legs = 4;
  }
}

class SuperPower {
  constructor(name) {
    this.name = name;
  }

  use_laser_vision() {
    return `${this.name} using laser vision`;
  }

  be_invisible() {
    return `${this.name} is invisible`;
  }
}

const chimpanzee = new Chimpanzee();
const tiger = new Tiger();

console.log(tiger.num_legs);
console.log(chimpanzee.super_power.use_laser_vision());
console.log(tiger.super_power.be_invisible());
