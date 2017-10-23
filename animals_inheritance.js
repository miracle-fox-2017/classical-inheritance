class animals {
  constructor(){
    this.name = '';
    this.warna = '',
    this.num = 2
  }

  set legs(num){
    this.num = num
  }

  get legs(){
    return this.num
  }
}

class foxAnimals extends animals {
  constructor() {
    super()
    this.name = 'fox',
    this.warna = 'kuning'
  }
  star(){
    // console.log(`jenis : ${this.name} || warna : ${this.warna} || jumlah kaki : ${super.legs}`);
    return `jenis : ${this.name} || warna : ${this.warna} || jumlah kaki : ${super.legs}`

  }

}
class frogAnimals extends animals {
  constructor() {
    super()
    this.name = 'frog',
    this.warna = 'coklat'
  }
  star(){
    //console.log(`jenis : ${this.name} || warna : ${this.warna} || jumlah kaki : ${super.legs}`);
    return `jenis : ${this.name} || warna : ${this.warna} || jumlah kaki : ${super.legs}`
  }
}

let fox = new foxAnimals();
fox.legs=4
console.log(fox.star());
let frog = new frogAnimals();
// frog.legs=2
console.log(frog.star());
