"use strict"
class Animal{
    constructor(){
        this.num_legs = 2;
        this.blood = true;
    }
}

class Ayam extends Animal{
    
}

class Bebek extends Animal{
    
}

class Kucing extends Animal{
    constructor(kaki) {
        super();
        this.num_legs = 4;
    }
}

let ayam = new Ayam()
console.log(ayam);

let kucing = new Kucing(4)
console.log(kucing);