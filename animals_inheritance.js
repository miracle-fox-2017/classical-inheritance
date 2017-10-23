"use strict"
class Animal {
  constructor (){
    this.legs = 4
    this.food = 'leaf'
    this.sound = 'wooof'
    this.kekuatan = new SuperPower()
  }
}

class elephant extends Animal{
  constructor(){
    super();
    this.sound = 'preeeeeeet'

  }
}

class Bear extends Animal{
  constructor(){
    super();
    this.food = 'fish'
    this.sound = 'groooaaarr'
  }
}

class Wolf extends Animal{
  constructor(){
  super()
  this.food = 'meat'
  }
}

class Monkey extends Animal{
  constructor(){
  super()
  this.leg = 2
  this.food = 'fruit'
  this.sound = 'eeeekkk'
  }
}

class Tiger extends Animal{
  constructor(){
  super()
  this.sound = 'grrrrr'
  this.food = 'meat'
  }
}

class Cat extends Tiger{
  constructor(){
  super()
  this.sound = 'meooow'
  this.meat = 'fish'
  }
}


class SuperPower{
  use_laser_vision(){
    return 'ngiiiiiingg jedaaaarrrrr'
  }
  use_be_invisible(){
    return ''
  }
  use_double_power(){
    return 'Im twice bigger'
  }
}

let binatang = new Animal();
let gajah = new elephant();
let beruang = new Bear();
let kucing = new Cat()
let kekuatan = new SuperPower();
console.log(gajah.kekuatan.use_laser_vision());
console.log(kucing.kekuatan.use_be_invisible())
console.log(beruang.kekuatan.use_double_power());
