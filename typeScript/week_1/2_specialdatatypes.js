//Any
let data = "TypeScript";
console.log(data.toUpperCase());
data = 100;
console.log(data + 50);
//unknown
let value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
//void
function printSum(a, b) {
    console.log(a + b);
}
printSum(10, 20);
export {};
