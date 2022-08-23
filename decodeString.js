// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"




// Write your code below this line                       
function decodeString(code) {
    // We know the first character in our string is a number, so let's type coerce it into a number datatype.
    let decipher = Number(code[0])
    
    // Create a solution string to add letters to one-by-one.
    let solution = ""
    
    // Let's write a for loop to go through our string.
    // We will start on the index of 1 because the index of 0 is our number we use to decipher.
    for (let i = 1; i < code.length; i++) {
      
      // Capture the ascii code for the given letter, plus the value of the decipher.
      let strValue = code[i].charCodeAt() + decipher
      
      // Translate the ascii value back to a character and add it to the solution string..
      solution += String.fromCharCode(strValue)
    }
    
    // Return the solution string.
    return solution
  }                                                      