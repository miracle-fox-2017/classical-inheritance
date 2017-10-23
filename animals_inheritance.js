"use strict"
class Animal{
  constructor(){
    this.jumlahKaki=4;
    this.Howtheymove='terbang';
    this.isVegan=true;
  }
}
class Bird extends Animal{
  constructor(){
    super()
    this.jumlahKaki=2;

  }
}
class Bat extends Animal{
  constructor(){
    super()
    this.jumlahKaki=2;

  }
}
class Fox extends Animal{
  constructor(){
    super()
    this.Howtheymove='Jalan dan Berlari'
    this.isVegan = false;

  }
}
class Wolf extends Animal{
  constructor(){
    super()
    this.Howtheymove='Jalan dan Berlari'
    this.isVegan = false;

  }
}

let bird = new Bird()
console.log(bird);
let bat = new Bat()
console.log(bat);
let fox = new Fox()
console.log(fox);
let wolf = new Wolf()
console.log(wolf);
