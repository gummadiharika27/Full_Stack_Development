// Program to demonstrate Functions, Parameters, Return Types
// 1. Parameter & Return Type
function welcome(name) {
    return `Welcome, ${name}!`;
}
// 2. Default Parameter
function getCourse(course = "TypeScript") {
    return `Course: ${course}`;
}
// 3. Optional Parameter
function showStudent(name, grade) {
    console.log(`Student: ${name}`);
    if (grade) {
        console.log(`Grade: ${grade}`);
    }
}
// 4. Rest Parameter
function findTotal(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}
// ---- Testing ----
console.log(welcome("Pavani"));
console.log(getCourse());
console.log(getCourse("Java"));
showStudent("Rahul");
showStudent("Priya", "A");
const totalMarks = findTotal(85, 90, 88, 95);
console.log(`Total Marks: ${totalMarks}`);
export {};
