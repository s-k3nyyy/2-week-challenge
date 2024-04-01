// Function to check if a number is prime
function ifprime(num) {
    // If the number is less than or equal to 1, it is not prime
    if (num <= 1) return false;
    // 2 is a prime number
    if (num === 2) return true;
    // If the number is even and not 2, it is not prime
    if (num % 2 === 0) return false;
    // Calculate the square root of the number for optimization
    let sqrt = Math.sqrt(num);
    // Check divisibility for odd numbers up to the square root of the number
    for(let i = 3; i <= sqrt; i += 2) {
        // If the number is divisible by any number up to its square root, it is not prime
        if (num % i === 0) return false;
    }
    // If none of the above conditions are met, the number is prime
    return true;
}

// Function to filter out the prime numbers from an array
function filterPrimes(inputArray) {
    // Use the Array.filter method to create a new array with all elements that pass the test implemented by the isPrime function
    return inputArray.filter(ifprime);
}

// Test the filterPrimes function
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  // Output: [2, 3, 5, 7]