class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  greet() {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color + ".");
  }
}

//module.exports = Person;
//ES 6 way to export a class
export default Person;
