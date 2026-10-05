// Arrow function without parameters
const hello = () => {
    console.log("Hello TypeScript");
};
// Arrow function with parameters
const add = (a, b) => {
    return a + b;
};
// Arrow function with one parameter
const cube = (n) => {
    return n * n * n;
};
// Arrow function with default parameter
const greet = (name = "Guest") => {
    console.log("Welcome, " + name);
};
// Function calls
hello();
console.log("Sum:", add(15, 25));
console.log("Cube:", cube(3));
greet();
greet("Rahul");
export {};
