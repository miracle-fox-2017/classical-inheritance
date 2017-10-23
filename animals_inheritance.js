"use strict"
class Animal {
	constructor(num_legs = 4, is_warm_blooded = true, animal_name) {
		this.animal_name = animal_name;
		this.superPower = new SuperPower();
		this.num_legs = num_legs;
		this.is_warm_blooded = is_warm_blooded;
	}
}

class Frog extends Animal {
	constructor(num_legs, is_warm_blooded, animal_name) {
		super(num_legs, is_warm_blooded, animal_name);
	}
}

class Bat extends Animal {
	constructor(num_legs, is_warm_blooded, animal_name) {
		super(num_legs, is_warm_blooded, animal_name);
	}
}

class Chimpanzee extends Animal {
	constructor(num_legs, is_warm_blooded, animal_name) {
		super(num_legs, is_warm_blooded, animal_name);
	}
}

class Fox extends Animal {
	constructor(num_legs, is_warm_blooded, animal_name) {
		super(num_legs, is_warm_blooded, animal_name);
	}

	use_laser_vision(str) {
		return this.superPower.use_laser_vision(str);
	}
}

class Chicken extends Animal {
	constructor(num_legs, is_warm_blooded, animal_name) {
		super(num_legs, is_warm_blooded, animal_name);
	}
}

class SuperPower {
	constructor() { }

	use_laser_vision(strLaser = 'Launching laser beam!!') {
		return strLaser;
	}

	be_invisible(strInvisible = 'INVISIBLE ENGAGED! No oe can see you') {
		return strInvisible;
	}
}


let fox = new Fox(4, false, 'Miracle');
console.log('Jumlah kaki Fox: '+fox.num_legs);
console.log('FOX is_warm_blooded: '+fox.is_warm_blooded);
console.log('FOX name: '+fox.animal_name);
console.log(fox.superPower.use_laser_vision('FOX PAW beam!'));

let bat = new Bat(2, true, 'Batty');
console.log('Jumlah kaki bat: '+bat.num_legs);
console.log('bat is_warm_blooded: '+bat.is_warm_blooded);
console.log('bat name: '+bat.animal_name);
console.log(bat.superPower.use_laser_vision('Batarang beam!'));
console.log(bat.superPower.be_invisible('SHDOW Blade in 1s'));