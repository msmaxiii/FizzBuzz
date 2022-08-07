// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.


// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let value = false;
for(let i = 0; i < array.length; i++){
   for (let k = 0; k < array.length; k++){
    if ( i !== k){
        if (array [i] + array[k]=== 0){
            value = true;
            
        }
    
    }
}
}
console.log(value);