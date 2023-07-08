
// 1. Given the data below, define a type alias for representing users.

type user = {
    name: string,
    age: number,
    company: string
};

let users: user = [  
    {
        name:'Brandt C',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Brendan Carlson',
        age:99
    }
];



// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type weekdays = ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday' );



// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}
}
    printInfo = ():string => {
        return `${this.firstName} ${this.lastName}`}

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee extends Person {
    constructor(
        public firstName:string, 
        public lastName:string,
        public salary:number){
        super(firstName, lastName)
        }
    printInfo = ():string => {
        return `${this.firstName} ${this.lastName} has a ${this.salary} salary`
}
}
// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Brandt C',
    salary:10_000_000,
    address:{
        street:'Clutch Ave',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Employee {
    name:string;
    salary:number;
    address:{
        street:string,
        city:string,
        zipCode:number
    };
    info(): string;
}