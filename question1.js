//swap function the caseing of each character in a string
function swapcase(str) { //empty string for the result
    let result = ''
    //loops through each character in the string
    for (let i = 0; i < str.length; i++) {
        // if the character is uppercase ,it coverts it to lowercase and vice versa
        result += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return result;
    //return the result

}
console.log(swapcase('The Quick Brown Fox')); //the output becomes tHE qUICK bROWN fOX