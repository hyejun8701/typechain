// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age:number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person = {
//     name: "yoon",
//     age: 32,
//     gender: "f"
// }

const yoon = new Human("yoon", 32, "f")

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, yuo are a ${person.gender}!!`;
};

console.log(sayHi(yoon));

export {};