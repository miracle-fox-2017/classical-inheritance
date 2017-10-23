"use strict"
class Animal {
  constructor (sound,food,name,is_warm_blood=true,leg=4){
    this.name = name
    this.legs = leg
    this.food = food
    this.sound = sound
    this.kekuatan = new SuperPower(this.name)
  }
}

class Elephant extends Animal{
  constructor(){
    super('preeet','grass','elephant');

  }
}

class Bear extends Animal{
  constructor(){
    super('groaarr','fish','bear');
  }
}

class Wolf extends Animal{
  constructor(){
  super('wooof','meat','wolf')
  }
}

class Monkey extends Animal{
  constructor(){
  super('eeeek','fruit','monkey')
  this.leg = 2
  }
}

class Tiger extends Animal{
  constructor(){
  super('grrrr','meat','tiger')
  }
}




class SuperPower{
  constructor(name){
    this.name = name
  }
  use_laser_vision(){
    return this.name+' ngiiiiiingg jedaaaarrrrr'
  }
  use_be_invisible(){
    return this.name+''
  }
  use_double_power(){
    return this.name+' Im twice bigger'
  }
}

//let binatang = new Animal();
let gajah = new Elephant();
let beruang = new Bear();
let monyet = new Monkey()
//let kekuatan = new SuperPower();
console.log(gajah.kekuatan.use_laser_vision());
console.log(monyet.kekuatan.use_be_invisible())
console.log(beruang.kekuatan.use_double_power());
//console.log(gajah.kekuatan)
