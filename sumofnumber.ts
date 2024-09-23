// Function using for-loop to sum array elements
function sumUsingForLoop(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Function using while-loop to sum array elements
function sumUsingWhileLoop(numbers: number[]): number {
  let total = 0;
  let index = 0;
  while (index < numbers.length) {
    total += numbers[index];
    index++;
  }
  return total;
}

// Recursive function to sum array elements
function sumUsingRecursion(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return numbers[0] + sumUsingRecursion(numbers.slice(1));
}

// Function using array reduce method for summation
function sumUsingReduce(numbers: number[]): number {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Test array
const numbers = [1, 2, 3, 4];

// Calling the functions
const totalForLoop = sumUsingForLoop(numbers);
const totalWhileLoop = sumUsingWhileLoop(numbers);
const totalRecursion = sumUsingRecursion(numbers);
const totalReduce = sumUsingReduce(numbers);

// Output results without any string
console.log(totalForLoop);
console.log(totalWhileLoop);
console.log(totalRecursion);
console.log(totalReduce);
