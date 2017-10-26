var $ = require('jquery');

//ES6 way to import a module
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes $0 in taxes.');
  }
}


var john = new Person("John Doe", "blue");
var jane = new Adult("Jane Smith", "orange");

john.greet();
jane.greet();

jane.payTaxes();
