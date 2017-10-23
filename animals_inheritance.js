"use strict"


class animal {
  constructor(){
    this.legs = 4;
    this.makanan  = 'daging';
    this.lari = 'cepat'
    this.superpower = new SuperPower( )
  }
}

class wolf extends animal {
    constructor(){
      super();
      this.name = 'serigala'
      this.populasi = 'bergerombol'

    }
}

class giraffe extends animal {
  constructor(){
    super();
    this.makanan = 'daun';
    this.lari = 'lamban'
  }
}

class Panda extends animal {
  constructor(){
    super()
    this.makanan = 'bambu'
    this.lari = 'lamban sekali'
  }
}
class tiger extends animal {
  constructor(){
    super()
    this.lari = 'cepat sekali';
  }
}
class SuperPower{
  use_laser_vision (){
    return "Im from the future"
  }
  be_invisible (){
    return "U cant see me"
  }
}
let binatang = new animal();
let serigala = new wolf();
let jerapah = new giraffe()
let panda = new Panda();
let macan = new tiger();

console.log(serigala.superpower.be_invisible());
console.log(macan.superpower.use_laser_vision());
