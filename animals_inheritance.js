"use strict"
class Animals {
  constructor(){
    this.kaki = 4
    this.cakar = true
    this.taring = true
    this.superPower = new SuperPower(this.taring)
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
  constructor(kaki, cakar){
    super(kaki, cakar)
    this.kaki = kaki
    this.cakar = cakar

  }
}

class SuperPower {
  constructor(taring){
    this.taring = true
    this.regen = this.regeneration();
    this.invis = false;
    this.nuke = '-'
  }
  regeneration(){
    if(this.taring == true){
      return 'i am immortal'
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
let ular = new Snake(0, false)

// console.log(animal)
console.log(rubah.superPower.regeneration())
console.log(ular)

beruang.superPower.pupNuclear()
console.log(beruang)

console.log(serigala)
