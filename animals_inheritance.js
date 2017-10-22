"use strict"

class Animal {
  constructor() {
    this.num_legs = 2
  }
}

class Frog extends Animal{
  constructor(){
    super()
    this.num_legs = 4
    this.invisibel = new SuperPower()
  }
}
class Bat extends Animal {

}
class Chimpanzee extends Animal {


}
class Fox extends Animal{
  constructor(){
    super()
    this.num_legs = 4
    this.superpower = new SuperPower()
  }

}
class Chicken extends Animal {

}
class SuperPower {
  constructor() {

  }
  use_laser_vision(){
    console.log('Meningkatkan Kekuatan Full');
  }
  be_invisible(){
    console.log('Menjadi tak terlihat');
  }
}

var animal = new Animal()
var kodok = new Frog()
var kalong = new Bat()
var rubah = new Fox()
// var seperpower = new SuperPower()
console.log(animal);
console.log(kodok);
console.log(kalong);
console.log(rubah);
rubah.superpower.use_laser_vision();
kodok.invisibel.be_invisible();
