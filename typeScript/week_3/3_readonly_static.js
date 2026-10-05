// static_readonly.ts
class Student {
    // Static properties
    static collegeName = "ABC Engineering College";
    static totalStudents = 0;
    // Readonly property
    rollNo;
    name;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        // Increment static count
        Student.totalStudents++;
    }
    // Static method
    static showCollege() {
        console.log(`College: ${Student.collegeName}`);
    }
    // Instance method
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
    }
}
// Accessing static members
Student.showCollege();
// Creating objects
const student1 = new Student("Pavani", 101);
const student2 = new Student("Rahul", 102);
// Display details
student1.displayDetails();
student2.displayDetails();
// Readonly property
console.log(`Student 1 Roll No: ${student1.rollNo}`);
// student1.rollNo = 201;   // Error: Cannot assign to 'rollNo' because it is a read-only property.
// Static property
console.log(`Total Students: ${Student.totalStudents}`);
export {};
