const sayHi = (name:string, age: number, gender:string): string => {
    return `Hello ${name}, you are ${age}, yuo are a ${gender}!`;
};

console.log(sayHi("Yoon", 32, "female"));

export {};