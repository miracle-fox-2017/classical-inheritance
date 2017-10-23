"use strict"
class Animal {
	constructor(name, num_leg, is_warm_blooded){
		this.name = name
		this.num_leg = num_leg
		this.is_warm_blooded = true
		this.superpower = new SuperPower(this.name)
	}
}

class Frog extends Animal{

}

class Bat extends Animal{
	constructor(name, num_leg, is_warm_blooded){
		super(name, num_leg, is_warm_blooded)
	}	
}

class Chimpanzee extends Animal {
	constructor(name, num_leg, is_warm_blooded) {
		// code
		super(name, num_leg, is_warm_blooded)
	}
}

class Fox extends Animal {
	constructor(name, num_leg, is_warm_blooded) {
		// code
		super(name, num_leg, is_warm_blooded)
	}
}

class Chicken extends Animal {
	constructor(name, num_leg, is_warm_blooded) {
		// code
		super(name, num_leg, is_warm_blooded)
	}
}

class SuperPower{
	constructor(name){
		this.name = name
	}

	use_laser_vision(){
		return this.name+' pakek mata laser'
	}

	be_invisible(){
		return this.name+'nye kagak keliatan'
	}

	anti_peluru(){
		return this.name+'nye punya ilmu kebal'
	}
}

//Release 0
let Hewan = new Animal()
let Kodok = new Frog()
console.log(Kodok);
let Kelalawar = new Bat('Kelalawar', 2, false)
console.log(Kelalawar);

//Release 1
let Simpanse = new Chimpanzee('Simpanse', 2, true)
console.log(Simpanse.superpower.use_laser_vision());
let fox = new Fox('Rubah', 4, true)
console.log(fox.superpower.be_invisible());
let Ayam = new Chicken('Ayam', 2, true)
console.log(Ayam.superpower.anti_peluru());