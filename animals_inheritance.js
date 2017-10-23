"use strict"
class Animal{
    constructor(){
        this.num_legs = 2;
        this.blood = true;
        this.superpower = new SuperPower();
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

class SuperPower{
    constructor(){
        this.laser = 'aktif';
        this.invisible = 'aktif';
    }
    
    use_laser_vision(){
        return this.laser;
    }

    be_invisible() {
        return this.invisible;
    }

}

let ayam = new Ayam()
// console.log(ayam);
console.log(ayam.superpower.use_laser_vision());
console.log(ayam.superpower.be_invisible());

let kucing = new Kucing(4)
// console.log(kucing);
console.log(kucing.superpower.use_laser_vision());
console.log(kucing.superpower.be_invisible());