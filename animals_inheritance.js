"use strict"
class Animals {
  constructor() {
    this.kaki = 4
    this.berbulu = true
    this.golongan = 'mamalia'
    this.SuperPower = new SuperPower
  }

}

class SuperPower {
  constructor() {

  }

  laserVision(){
    return'use laser vision'
  }

  beInvisible(){
    return'invisible mode active';
  }

}

class Fox extends Animals {
  constructor(){
    super()
  }

}

class Bat extends Animals {
  constructor(){
    super()
    this.kaki = 2
  }

}

class Chimp extends Animals {
  constructor() {
    super()
    this.kaki = 2
  }

}

let rubah = new Fox()
let kalong = new Bat()
let chimp = new Chimp()
console.log(rubah.SuperPower.beInvisible());
console.log(kalong);
console.log(chimp);
