//create object using object literals
const player = {};
//Properties
player.name = 'Naim Sheikh';
player.speciality = 'batsman';
//Methods
player.bat = function(){
    console.log('swing your bat');
}

// console.log(player);
// player.bat();

const student = {
    name: 'Piran',
    job: 'Porashuna',
    salary: 10
}

//object constructor
const person = new Object();
console.log(person);

//object create method
const item = Object.create(student);
console.log(item);
console.log(item.name);

// class
class Person{
    name;
    address;
    age;
    constructor(name, address, age){
        this.name = name;
        this.address = address;
        this.age = age;
    }
}

const person1 = new Person('Person1', 'Dhaka', 20);
console.log(person1);