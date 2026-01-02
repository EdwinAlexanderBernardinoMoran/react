const myArray: number[] = [1, 2, 3, 4, 5];

myArray.push(7);

console.log(myArray);

for (const myNumber of myArray) {
    console.log(myNumber + 10);
}

// structuredClone para romper referencias en arreglos u objetos anidados

const myArray2: number[] = structuredClone(myArray);

myArray2.push(1000);

console.log({ myArray, myArray2 });