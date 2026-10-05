// genericfunctions.ts

// Generic Function to return the same value
function displayValue<T>(value: T): T {
    return value;
}

console.log(displayValue<number>(100));
console.log(displayValue<string>("Hello"));
console.log(displayValue<boolean>(true));


// Generic Function with an Array
function getFirstElement<T>(items: T[]): T {
    return items[0];
}

const numbers = [10, 20, 30];
const fruits = ["Apple", "Banana", "Mango"];

console.log("First Number:", getFirstElement(numbers));
console.log("First Fruit:", getFirstElement(fruits));


// Generic Function with an Object
interface Student {
    name: string;
    age: number;
}

function printData<T>(data: T): T {
    return data;
}

const student: Student = {
    name: "Pavani",
    age: 20
};

const result = printData(student);

console.log("Student Name:", result.name);
console.log("Student Age:", result.age);

export {};