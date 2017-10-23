"use strict"

class SuperPower{
    constructor(){
    }
    use_laser_vision(){
        return "Memiliki Kekuatan Superman - Laser Vision";
    }
    be_invisible(){
        return "Memiliki Kekuatan Invisible Woman - Fantastic Four";
    }
}

class Animal extends SuperPower{
    constructor(){
        super();
        this.kaki=2;
        this.pemakan="omnivora";
        this.perkembangan="ovipar";
    }
}

class Sapi extends Animal{
    constructor(){
        super();
        this.kaki=4;
        this.perkembangan="vivipar";
    }
}

class Ayam extends Animal{
    constructor(){
        super();
        this.pemakan="herbivora";
    }
}

class Kuda extends Animal{
    constructor(){
        super();
        this.kaki=4;
        this.pemakan="herbivora";
        this.perkembangan="vivipar";
    }
}

class Bunglon extends Animal{
    constructor(){
        super();
        this.kaki=4;
        this.perkembangan="ovivipar";
    }
}

const sapi=new Sapi();
const ayam=new Ayam();
const kuda=new Kuda();
const bunglon=new Bunglon();
console.log(sapi);
console.log(ayam);
console.log(ayam.be_invisible());
console.log(kuda);
console.log(bunglon);
console.log(bunglon.use_laser_vision());
