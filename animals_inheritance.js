"use strict"
class Animal {
	constructor(name, num_legs = 2,boolean){
		this.num_legs = num_legs;
		this.name = name;
		this.is_warm_blooded = boolean;
		this.superPower = new SuperPower()
		
	}
}

class Frog extends Animal {
	constructor (name, num_legs = 2,boolean){
		super(supername, num_legs,boolean)
	}

}

class Bat extends Animal {
	constructor(name, num_legs = 2,boolean){
		super(supername, num_legs,boolean)
	}
}

class Chimpanzee extends Animal {
	constructor(name, num_legs = 2,boolean){
		super(supername, num_legs,boolean)
	}
}

class Fox extends Animal {
	constructor(name, num_legs = 2,boolean){
		super(name, num_legs,boolean)
	}
}

class Chicken extends Animal {
	constructor(name, num_legs = 2,boolean){
		super(name, num_legs,boolean)
	}
}

class SuperPower{
	constructor(){
	}
	use_laser_vision(){
		return ("mengeluarkan vision laser")
	}
	be_invisible(){
		return ("menghilang")
	}	
}
 
let chicken = new Chicken("ayam",4,true)
console.log(chicken.name+" "+chicken.superPower.use_laser_vision())
console.log(chicken.name+" Memiliki "+chicken.num_legs+" kaki ")
console.log(chicken.name+" "+chicken.superPower.be_invisible())
console.log(chicken.name+" is warm "+chicken.is_warm_blooded)
console.log("------------------------")
let fox = new Fox("rubah",2,true)
console.log(fox.name+" "+fox.superPower.use_laser_vision())
console.log(fox.name+" Memiliki "+fox.num_legs+" kaki ")
console.log(fox.name+" "+fox.superPower.be_invisible())
console.log(fox.name+" is warm "+fox.is_warm_blooded)