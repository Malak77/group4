 function Animal() {
    this.name = "f";
  }

  Animal.prototype.walk =[" walks",3];
  
var ins = new Animal();
  console.log(ins.walk)

  console.log(ins.hasOwnProperty('name'))
  console.log(ins.hasOwnProperty('walk'))


console.log(typeof null)