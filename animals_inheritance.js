"use strict"
class Animal{
    constructor(name,is_warm_blooded = true, legs = 2){
        this.name            = name
        this.is_warm_blooded = is_warm_blooded
        this.legs            = legs
        this.superpower = new SuperPower(this.name)
    }


}


class Frog extends Animal{
    constructor(){
        super('Kodok')
    }
}

class Bat extends Animal{
    constructor(){
        super('Kalong')
    }
}

class Fox extends Animal{
    constructor(){
        super('Serigala')
        
        
    }
    





}

class Chicken extends Animal{
    constructor(){
        super('Chicken Little')
    }


}

class SuperPower{
    constructor(name){
        
        this.name = name
    }
    use_laser_vision(){
        this.name = this.name + " Super"
        return `${this.name} mendapatkan laser vision dan berubah menjadi ${this.name}`
    }

}



let binatang = new Animal()
let miracle = new Fox()
let ayam = new Chicken()
// console.log(binatang)
console.log(miracle.superpower.use_laser_vision())
console.log(ayam.superpower.use_laser_vision())