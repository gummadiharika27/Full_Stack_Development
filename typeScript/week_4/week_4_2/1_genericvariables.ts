// genericStorage.ts

// Generic Class Example

class StorageBox<T> {

    private value: T;

    constructor(item: T) {
        this.value = item;
    }

    // Display the stored item
    public retrieve(): T {
        console.log("Fetching item from storage...");
        return this.value;
    }

    // Replace the existing item
    public replace(item: T): void {
        this.value = item;
        console.log("Storage updated successfully.");
    }
}

// -------------------- Example 1 --------------------
// Store a Number

const marksBox = new StorageBox<number>(95);

console.log("Student Marks :", marksBox.retrieve());

marksBox.replace(99);

console.log("Updated Marks :", marksBox.retrieve());


// -------------------- Example 2 --------------------
// Store a String

const courseBox = new StorageBox<string>("TypeScript");

console.log("Course Name :", courseBox.retrieve());


// -------------------- Example 3 --------------------
// Store a Custom Object

interface Laptop {
    brand: string;
    ram: number;
}

const laptopBox = new StorageBox<Laptop>({
    brand: "Dell",
    ram: 16
});

const myLaptop = laptopBox.retrieve();

console.log("Laptop Brand :", myLaptop.brand);
console.log("RAM :", myLaptop.ram + " GB");


// -------------------- Type Safety --------------------

// marksBox.replace("Ninety");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.