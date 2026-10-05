// access_modifiers.ts
class Employee {
    // Public: Accessible from anywhere
    name;
    // Private: Accessible only inside this class
    salary;
    // Protected: Accessible inside this class and child classes
    department;
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    // Public method
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
    }
    // Private method
    displaySalary() {
        console.log(`Salary: ${this.salary}`);
    }
    // Public method to access private method
    showSalary() {
        this.displaySalary();
    }
}
// Child Class
class Manager extends Employee {
    showDepartment() {
        console.log(`Department: ${this.department}`);
    }
}
// Creating Objects
const emp = new Employee("Pavani", 50000, "IT");
console.log(emp.name); // Public - Accessible
emp.displayDetails();
emp.showSalary(); // Accessing private data through public method
// console.log(emp.salary);      // Error: salary is private
// console.log(emp.department);  // Error: department is protected
const mgr = new Manager("Rahul", 70000, "HR");
mgr.showDepartment();
export {};
