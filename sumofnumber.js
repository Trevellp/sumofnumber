"use strict";
// Function using for-loop to sum array elements
function sumUsingForLoop(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
// Function using while-loop to sum array elements
function sumUsingWhileLoop(numbers) {
    var total = 0;
    var index = 0;
    while (index < numbers.length) {
        total += numbers[index];
        index++;
    }
    return total;
}
// Recursive function to sum array elements
function sumUsingRecursion(numbers) {
    if (numbers.length === 0)
        return 0;
    return numbers[0] + sumUsingRecursion(numbers.slice(1));
}
// Function using array reduce method for summation
function sumUsingReduce(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
// Test array
var numbers = [1, 2, 3, 4];
// Calling the functions
var totalForLoop = sumUsingForLoop(numbers);
var totalWhileLoop = sumUsingWhileLoop(numbers);
var totalRecursion = sumUsingRecursion(numbers);
var totalReduce = sumUsingReduce(numbers);
// Output results without any string
console.log(totalForLoop);
console.log(totalWhileLoop);
console.log(totalRecursion);
console.log(totalReduce);
