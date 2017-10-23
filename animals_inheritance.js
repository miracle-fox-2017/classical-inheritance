"use strict"
class Animal {
  constructor() {
    this.name = 'Animal'
    this.num_legs = 2,
    this.is_warm_blooded = false
    this.live_at = 'both'
    this.superpower = new SuperPower()
  }
}
class Frog extends Animal {
  constructor() {
    super()
    this.name = 'Frog'
    this.num_legs = 4

  }
}

class Bear extends Animal {
  constructor() {
    super()
    this.name = 'Bear'
    this.num_legs = 4
    this.is_warm_blooded = true
  }
}
class Chicken extends Animal {
  constructor() {
    super()
    this.name = 'Chicken'
    this.live_at = 'land'
  }
}
class Sheep extends Animal {
  constructor() {
    super()
    this.name = 'Sheep'
    this.num_legs = 4
    this.live_at = 'land'
  }
}
class Duck extends Animal {
  constructor(){
    super()
    this.name = 'Duck'
  }

}

class SuperPower {
    use_laser_vision(){
        return 'shooooott lazer gun !!!!'
    }

    be_visible(){
      return '(showed) tuing tuing ta da . .'
    }

    be_flying(){
      return 'flying with litle wings'
    }

    be_jump(){
      return 'jumping to the HighSky land'
    }
    running(){
      return 'running very fast'
    }
}

let frog = new Frog();
let bear = new Bear();
let chicken = new Chicken();
let sheep = new Sheep();
let duck = new Duck();

console.log(`The ${frog.name} ${frog.superpower.be_jump()} and ${frog.superpower.use_laser_vision()} to killing the ${chicken.name}.`);
console.log(`The ${chicken.name} do ${chicken.superpower.be_flying()} and ${chicken.superpower.be_visible()} in front of ${duck.name}.`);
console.log(`${chicken.name} and ${duck.name} living together in the river and saw a ${bear.name} hunting the ${sheep.name}.`);
console.log(`${sheep.name} can ${sheep.superpower.running()} with ${sheep.num_legs} legs.`);
console.log(`Finaly ${sheep.name}, ${duck.name} and ${chicken.name} can live peacefully.`);
console.log('>>>>> The End <<<<<');
