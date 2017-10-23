"use strict"

class Superpower {
  constructor() {
    this.sinar = 'wau'
  }

  use_laser_vision() {
    return 'pancaran sinar X'
  }

  be_invisible() {
    return 'menghilang'
  }
}

class Animals {
  constructor(makan, habitat) {
    this.num_legs = 4
    this.is_warm_blooded = false
    this.makan = makan
    this.superpower = new Superpower()
    this.habitat = habitat
  }

  berjalan() {
    return 'dengan empat kaki'
  }

}

class Fox extends Animals {
  constructor(makan) {
    super(makan)
    this.warna = 'kuning'
  }

  memanjat() {
    return 'memanjat pohon'
  }
}

class Chimpanze extends Animals {
  constructor(makan) {
    super(makan)
    this.warna = 'hitam'
  }

  berjalan() {
    return 'dapat berjalan dengan 4 kaki dan 2 kaki'
  }
}

class kura extends Animals {
  constructor(makan, habitat) {
    super(makan, habitat)
  }
}

var simpanse = new Chimpanze('jagung')
var rubah_gurun = new Fox('pete')
var penyu = new kura('daun', 'pantai')

console.log(penyu.makan);
console.log(penyu.habitat);
console.log(penyu.berjalan());
console.log(penyu.is_warm_blooded);
console.log(penyu.superpower.sinar);
