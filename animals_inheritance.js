"use strict"

class SuperPower{
  constructor(){

  }

  use_chain(){
    return 'GET OVER HEEEEERE!'
  }

  be_electric(){
    return 'SHAZAM!'
  }
}

class Animal {
  constructor (legs, blood){
    this.num_legs = 4
    this.is_warm_blooded = true
  }
}

class Frog extends Animal{
  constructor(){
    super()
    this.is_warm_blooded = false
    this.superpower = new SuperPower
  }

}

class Hippopotamus extends Animal{
  constructor(){
    super()
    this.superpower = new SuperPower
  }
}

class Horse extends Animal{
  constructor(){
    super()
  }

}

class Monkey extends Animal{
  constructor() {
    super()
    this.num_legs = 2
  }
}


var katak = new Frog
var hippo = new Hippopotamus
var kuda = new Horse
var monyet = new Monkey

console.log(katak.superpower.use_chain())
console.log(hippo.superpower.be_electric())
console.log(kuda)
console.log(monyet)
