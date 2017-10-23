"use strict"

class Animal {
  constructor(){
    this.num_legs = 2
    this.is_warm_blood = true
    this.superpower = new SuperPower()
  }
}

class Fox extends Animal{
  constructor(){
    super()
    this.num_legs = 4
  }
}

class Frog extends Animal{
  constructor(){
    super()
    this.num_legs = 4
    this.is_warm_blood = false
  }
}

class Chicken extends Animal{

}

class Tiger extends Animal{
  constructor(){
    super()
    this.num_legs = 4
  }
}

class SuperPower{
  use_laser_vision(){
    console.log('Laser Vision Activated!!');
  }

  aquatic_breathing(){
    console.log('Under Water No Problem!!');
  }

  be_invisible(){
    console.log('You Can`t See Me!!');
  }

  super_speed(){
    console.log('I`m The Fastest!!');
  }
}

let fox = new Fox()
let frog = new Frog()
let chicken = new Chicken()
let tiger = new Tiger()

console.log(fox);
console.log(frog);
console.log(chicken);
console.log(tiger);

fox.superpower.use_laser_vision()
frog.superpower.super_speed()
chicken.superpower.be_invisible()
tiger.superpower.aquatic_breathing()
