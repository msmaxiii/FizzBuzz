// To do so, loop from 1 to 50 (inclusive). 
// Each time through, if the number is evenly divisible by 3, say ‘fizz’.
//  If the number is evenly divisible by 5, say ‘buzz’.
//  If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

// Write your solution below this line:

// iterate ove the range 1 to 50, using for loop
for (let i = 1; i < 51; i++){
// otherwise check if current number is divisble by both 3 and 5
    // if true print out 'fizzbuzz'
if( i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz");
}
// check if the current number is divisible by 5, using modolo
    // if true print out 'buzz'
else if ( i % 5 === 0){
    console.log("buzz");
}
 // check if the current number is divisible by 3, using modolo
    // if true print out 'fizz'  
else if ( i % 3 === 0){
    console.log("fizz");
}
// else
    // print out current number
else{
    console.log(i);
}    
}