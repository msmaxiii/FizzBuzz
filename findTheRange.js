// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Pseudo code

// Find min and max values
// declare a variable to hold the value min
// initalize the variable to the first item in the array
let min = array[0];

// declare a variable to hold the value max
// initalize the variable to the first item in the array
let max = array [0];

// loop over the values of the array (for loop)
for (let i = 0; i < array.length; i++){
    // console.log(`array[${i}]` is $ {array[i]})

    // compare min to current number (if statement)
        // if current is smaller than min, min becomes current
        if (array[i] < min){
            min = array [i];
        }
    // compare min to current number (if statement)
        // if current is lager than max,max becomes current

        if(array[i] > max){
            max = array[i];
        }
        // print min and max values after (for loop)
    }
     console.log("min:");
    console.log("max:");


// Write your solution below:
