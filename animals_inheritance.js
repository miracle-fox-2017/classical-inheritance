"use strict"

class Animal {
    constructor() {
        this.num_legs = 2;
        this._jenis = 'cold blooded';
        this.superpower = new SuperPower();
    }

    get blood() {
        return this._jenis;
    }
    set blood(tipe) {
        if (tipe != 'cold blooded') {
            console.log('Hewan-hewan ini adalah kumpulan hewan berdarah dingin!');
        }
        this._jenis = tipe;
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
        this.jenisHewan = 'amphibi';
    }

    jenis(tipe) {
        if (tipe != 'amphibi') {
            console.log('Frog is an amphibi!');
        }
        this.jenisHewan = tipe;
    }


}

class Bat extends Animal {
    constructor() {
        super();
        this.num_legs = 4;
    }
}

class Fox extends Animal {

}

class Chicken extends Animal {
    constructor(number) {
        super(number);
        this.num_legs = number;
    }
}


class SuperPower {
    constructor() {
        this.vision = 'Eyes Laser';
        this.invisible = 'Menghilang';
    }

    use_laser_vision() {
        return this.vision;
    }
    be_invisible() {
        return this.invisible;
    }
}

let animal = new Animal(2);
animal.blood = 'Warm blooded';
console.log(animal);

let frog = new Frog();
frog.jenis("Mamalia")
console.log(frog);

let bat = new Bat();
console.log(bat);

let fox = new Fox();
console.log(fox);

let chicken = new Chicken(4);
console.log(chicken);

//SuperPower
console.log('Kelelawar :', bat.superpower.use_laser_vision());
console.log('Rubah :', fox.superpower.use_laser_vision());