"use strict"


class Animal
{
  constructor(numLegs, warmBlooded)
  {
    this._num_legs = numLegs;
    this._is_warm_blooded = warmBlooded;
    this.superPower = new SuperPower()
  }
}

class Frog extends Animal
{
  constructor(numLegs, warmBlooded)
  {
    super(numLegs, warmBlooded);
  }

}

class Spider extends Animal
{
  constructor(numLegs, warmBlooded)
  {
    super(numLegs, warmBlooded);
  }
}

class SuperPower
{
  constructor()
  {

  }

  use_laser_vision()
  {
    return "LAZORS!"
  }

  be_invisible()
  {
    return "RIKIMARU!1!1!"
  }
}


let spider = new Spider(8,true);
console.log(spider.superPower.use_laser_vision());
