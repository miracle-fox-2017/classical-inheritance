"use strict"

class Animal{
  constructor(name, num_legs,color,gender){
    this.name = name
    this.numLegs = 2
    this.color = 'white'
    this.gender = 'men'
    this.superPower = new SuperPower(this.name)
  }

}

class Frog extends Animal{
  constructor(){
    super()
    this.numLegs = 4
    this.color = 'green'
    this.gender = 'women'
  }
}

class Bat extends Animal{
  constructor(name, num_legs,color,gender){
    super(name, num_legs,color,gender)
    // this.name = name
    this.numLegs = num_legs
    this.color = color
    this.gender = gender
  }

  addEat(eat){
    this.eat = eat
  }
}

class Chimpanzee extends Animal{
  constructor(){
    super()
    this.numLegs = 4
    this.color = 'black'
    this.gender = 'men'
  }
}

class Fox extends Animal{
  constructor(){
    super()
    this.numLegs = 4
    this.color = 'orange'
    this.gender = 'men'
  }
}

class Chicken extends Animal{
  constructor(){
    super()
    this.color = 'black'
    this.gender = 'men'
  }

  addType(type){
    this.special = type
  }
}

class SuperPower{
  constructor(name){
    this.names = name
    console.log('===',name);
  }

  use_laser_vision(){
    return this.names + ' ' + `removing the laser from his eyes`
  }

  be_invisible(on_off){
    if(on_off == true){
      return `is hidding`
    }else{
      return `power is runs out`
    }
  }
}

let animal = new Animal('animal' , 4 , 'RGB', 'men')
let frog = new Frog()
let bat = new Bat('dracula',5,'black','men')
let chimpanzee = new Chimpanzee()
let fox = new Fox()
let chicken = new Chicken()

// add method for property
chicken.addType('jago')
bat.addEat('blood')

//class object
// console.log(animal);
// console.log(chicken);
console.log(bat);
// console.log(frog);
// console.log(chimpanzee);
// console.log(fox);

// property class object
console.log(`\n gender fox : ${bat.gender}`)
console.log(` bat eat : ${bat.eat}\n`)

//driver code // release 1
console.log(`\n==============SUPER POWER==============\n`)
console.log(`Monkey ${fox.superPower.be_invisible(false)}`)
console.log(`${bat.superPower.use_laser_vision()} \n`)
