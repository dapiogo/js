let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;

//tablice 
const numbers :number[] = [1, 2, 3, 4, 5];
const fruits :string[] = ["apple", "banana", "cherry"];
const booleanArray :boolean[] = [true, false, true];
let user : [string,number,boolean] = ["Alice",30,true];
let id: number | string = '123234'; //lub number

type Direction = "up" | "down" | "left" | "right";

let klawisz: Direction = 'up';

let uzycieklawiszy: Direction[] = ['up','down','left'];

type Point = {
    x: number;
    y: number;
}

const pointInfo: Point = {
    x:10,
    y:20
}

//interfejsy - podobne do typów ale stosowanie do bardziej zaawansowanych struktur obiektu



interface Person {
    name?: string;
    age: number;
    isStudent: boolean;
    city?: string; //opcjonalne pole
    country?: string;
    email?: string;
    phone?: string;
    address: {
        street: string;
        zipCode: string;
    };
    hobbies: string[];
}

const userInfo: Person = {
    name: "Bob",
    age: 28,
    isStudent: false,
    city: "New York",
    country: "USA",
    email: "bob@example.com",
    phone: "123-456-7890",
    address: {
        street: "5th Avenue",
        zipCode: "10001"
    },
    hobbies: ["reading", "traveling", "swimming"]
};

const userInfo2: Person = {
    name: "Bob",
    age: 28,
    isStudent: false,
    phone: "123-456-7890",
    address: {
        street: "5th Avenue",
        zipCode: "10001"
    },
    hobbies: ["reading", "traveling", "swimming"]
};

const userInfo3: Person = {
    // name: "Bob",
    age: 28,
    isStudent: false,
    city: "New York",
    country: "USA",
    email: "bob@example.com",
    phone: "123-456-7890",
    address: {
        street: "5th Avenue",
        zipCode: "10001"
    },
    hobbies: ["reading", "traveling", "swimming"]
};

interface Student extends Person {
    group: number;
    university: string;
}



const student: Student = {
    name: "Bob",
    age: 28,
    isStudent: false,
    city: "New York",
    country: "USA",
    email: "bob@example.com",
    phone: "123-456-7890",
    address: {
        street: "5th Avenue",
        zipCode: "10001"
    },
    hobbies: ["reading", "traveling", "swimming"],
    group: 5,
    university: "NYU"
};

function add(a:number,b:number):number {
    return a+b;
}

// add(2,3);
// add('2','3');

function greet(person: Person):string {
    return `Hello, ${person.hobbies || 'Guest'}!`;
}

// let anything: any = 5;
// anything = "Hello";
// anything = true;

let unknownValue: unknown = 10;




console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

type TESTPoint = {
    x: number;
    y: number;
    z: number;
}

interface TestUser {
    name: string;
    age: number;
    isStudent: boolean;
    hobbies: string[];
    address: {
        street: string;
        zipCode: string;
    };
    city: TESTPoint;
}

const testUser: TestUser = {
    name: "Alice",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "traveling", "swimming"],
    address: { street: "Main St", zipCode: "12345" },
    city: {
        x: 10,
        y: 20,
        z: 30
    }
}

const arr: TestUser[] = [testUser,testUser];

function testAge(age: number): boolean {
    return age > 18;
}

console.log(testUser);
console.log(add(5, 10));
