//to generate an array of numbers between two given numbers
function generateArray(beginning, ending) {
    // Initialize an empty array
    let array = [];
    // Loop from the beginning number to the ending number
    for(let i = beginning; i <= ending; i++) {
        // Add each number to the array
        array.push(i);
    }
    // Return the generated array
    return array;
}
// Test with the numbers 4 and 7
console.log(generateArray(4, 7));  // Output: 4, 5, 6, 7
// Test  with the numbers -4 and 7
console.log(generateArray(-4, 7)); // Output: -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7