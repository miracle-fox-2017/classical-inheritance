"use strict"
class Animals {
  constructor(){
    this.kaki = 4
    this.cakar = true
    this.taring = true
    this.superPower = new SuperPower(0)
  }
}

class Fox extends Animals{
}

class Wolf extends Animals{
  constructor(){
    super()
    this.superPower = new SuperPower(4)
  }

}

class Bear extends Animals{
  constructor(){
    super()
    this.kaki = 2
  }
}

class Snake extends Animals{
  constructor(){
    super()
    this.kaki = 0
    this.cakar = false

  }
}

class SuperPower {
  constructor(kaki){
    this.regen = false;
    this.invis = false;
    this.nuke = '-'
    this.kaki = kaki
  }
  regeneration(){
    if(this.kaki == 4)
    this.regen = true
  }

  invisible(){
    return this.invis = true
  }

  pupNuclear(){
    return this.nuke = '10000x hiroshima power'
  }
}

let animal = new Animals()
let rubah = new Fox()
let serigala = new Wolf()
let beruang = new Bear()
let ular = new Snake()

// console.log(animal)
console.log(rubah)
console.log(ular)

beruang.superPower.pupNuclear()
console.log(beruang)

serigala.superPower.regeneration()
console.log(serigala)
