"use strict"
class Animals {
  constructor(){
    this.kaki = 4
    this.cakar = true
    this.taring = true
    this.superPower = new SuperPower(this.kaki)
  }
}

class Fox extends Animals{
  constructor(){
    super()

  }
}

class Wolf extends Animals{
  constructor(){
    super()

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
    this.kaki = kaki;
    this.regen = this.regeneration();
    this.invis = false;
    this.nuke = '-'
  }
  regeneration(){
    if(this.kaki == 4){
      return true
    }else{
      return false
    }
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

console.log(serigala)
