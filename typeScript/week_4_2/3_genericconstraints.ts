// generic_constraints.ts

// Interface with a length property
interface HasLength {
    length: number;
}

// Generic function with constraint
function showLength<T extends HasLength>(value: T): number {
    return value.length;
}

console.log(showLength("Hello TypeScript"));

console.log(showLength([10, 20, 30, 40]));

console.log(showLength("Pavani"));

// Error Example
// console.log(showLength(100));
// Error: number does not have a 'length' property
export {};