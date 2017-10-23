"use strict"
class Animals {
  constructor (name){
    this._name = name
    this._num_legs = 0
    this._is_warm_blooded = false
    this.superPower = new SuperPower()
  }

  set num_legs(value){
    this._num_legs = value
  }
  get num_legs(){
    return this._num_legs
  }

  set is_warm_blooded(value){
   this._is_warm_blooded = value

  }
  get is_warm_blooded(){
    return this._is_warm_blooded
  }
  get data(){
    if(this.is_warm_blooded == true){
    return 'Hello saya ' + this._name + ' kaki saya ' + this.num_legs + ' saya berdarah panas '
    }else{
      return 'Hello saya ' + this._name + ' kaki saya ' + this.num_legs + ' saya berdarah dingin '
    }
  }

}

class Frog extends Animals {
  constructor(name){
  super(name)
  }
}

class Bat extends Animals {
  constructor(name){
    super(name)
  }
}


class SuperPower  {

  use_laser_vision(value){
    if(value === true){
      return `Kekuatan Laser Vision`
    }else{
      return 'Kekuatan Laser Vision Habis'
    }
  }

  be_invisible(value){
    if(value === true){
      return 'Kekuatan menghilan'
    }else{
      return 'Kekutan Invisible Habis'
    }
  }

}


var frog = new Frog('kodok')
frog.num_legs = 9
frog.is_warm_blooded = false
console.log(frog.data);
console.log(frog.superPower.use_laser_vision(true))
var bat = new Bat('batman')
bat.num_legs = 2
bat.is_warm_blooded = true
console.log(bat.data);
console.log(frog.superPower.be_invisible(false))
