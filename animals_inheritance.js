"use strict"

class Animal{
  constructor(num_legs, blodded){
    this.num_leg = num_legs || 2
    this.is_warm_blodded = blodded || false
  }
}

class SuperPower{
  use_laser_vision(){
    return 'laser...bipbipbip..'
  }
  kamehameha(){
    return 'ka..me..ha..me..haaa'
  }
}


class Chimpanze extends Animal{
  constructor(leg, blodd){
    super(leg, blodd)
    this.superpower = new SuperPower()
  }
}

class Frog extends Animal{
  constructor(leg, blodd){
    super(leg, blodd)
    this.superpower = new SuperPower()
  }
}

let chimp = new Chimpanze(8, true)
let frog = new Frog(12)
console.log(frog);
console.log(frog.superpower.use_laser_vision());
console.log(chimp);
console.log(chimp.superpower.kamehameha());
