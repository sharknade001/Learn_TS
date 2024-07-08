console.log("hello world !!!")

class Animal {
    // water:string;
    constructor() {
        // this.water = '123';
    }

    intro(){
        console.log(`my name is true`)
    }

    static exits() {
        console.log(`exits`)
    }
}

class Person extends Animal{
    // name:string; 
    // age:number;
    constructor(
        // name:string,age:number
    ) {
        super()
        // this.name = name;
        // this.age = age;
    }

    intro(){
        // console.log(`my name is ${this.name} and my age is ${this.age}`)
        console.log(`intro`)
    }

    static struggle() {
        console.log(`struggle`)
    }

    // static exits() {
    //     super.exits()
    //     console.log(`exits`)
    // }
}


let p = new Person();
// p.intro()
Person.exits();

// @ts-ignore
console.log(Object.getOwnPropertyNames(Person.__proto__));

// console.log(Person.__proto__['exits']);
console.log("--------------------------------------");
// @ts-ignore
Person.__proto__['exits']();