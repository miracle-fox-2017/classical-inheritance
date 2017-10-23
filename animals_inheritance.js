"use strict"

class Animal {
  constructor(name) {
    this.name  = name
    this.num_legs = 2
    this.is_warm_blood = true
    this.superpower = new SuperPower()
  }

  speak() {
    console.log(`Haloo namaku ${this.name}`)

    if(this.num_legs > 2) {
      console.log(`Aku mempunyai ${this.num_legs}kaki, lariku cepat sekali`)
    } else {
      console.log(`Aku mempunyai ${this.num_legs}kaki`)
    }

    if(this.is_warm_blood == true) {
      console.log('Aku adalah binatang berdarah panas')
    } else {
      console.log('Aku adalah binatang berdarah dingin')
    }

  }
}

class Frog extends Animal {
  constructor(name) {
  super(name)
  this.is_warm_blood = false
  }
}

class Bat extends Animal {
}

class Chimpanzee extends Animal {
}

class Fox extends Animal {
  constructor(name) {
  super(name)
  this.num_legs = 4
  }
}

class Chicken extends Animal {
}

class SuperPower {
  use_laser_vision() {
    console.log('Rasakan jurus andalanku!!');
    console.log('Jurus mata laser!! bip.. bip.. bip.. bip.. bip.. bip..')
  }

  be_invisible() {
    console.log('Aku bisa menghilang loh..');
    console.log('Jurus menghilang!! krik.. krik.. krik.. krik.. krik.. krik..')
  }
}

// let animal = new Animal()
// animal.superpower.use_laser_vision()
// animal.superpower.be_invisible()

let frog = new Frog('Keroro')
frog.speak()
frog.superpower.use_laser_vision()
console.log(`\n--------------------------------------------------\n`);

let bat = new Bat('Night Crawler')
bat.speak()
bat.superpower.be_invisible()
console.log(`\n--------------------------------------------------\n`);

// let chimpanzee = new Chimpanzee('Otong')
// console.log(chimpanzee)

let fox = new Fox('Mozilla')
fox.speak()
fox.superpower.use_laser_vision()

// let chicken = new Chicken('KFC')
// console.log(chicken)
