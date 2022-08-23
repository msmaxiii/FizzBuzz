// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.


// Here are a few more examples:
// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'


// Pseudo Code
// create an empty string
// iterate thru the string and check character out
// if the character is a number, I need to skip that many indexes and then store

// function decoder(code){
//     let result = "";
//     for(let i =0; i< code.length; i++){
//         // use parseInt on the character
//         if( (code[i]) === NaN){
//             console.log()
//         }else{
//             console.log("this is a number")
//         }
//         }
//         // if NaN keep going
//         // if num increment i by that number and add character at new index to result string
//     }
// }
// decoder ('0h2xce5ngbrdy')

const decoder = code =>{
    let result =[];
    for (let i = 0; i < code.length; i++){
        console.log(i, code[i],Number(code[i]));

        if(!isNaN(+code[i])){
            // coerce code [i] to a number:
            i += code[i];
        }else{
            result.push(code[i]);
        }
        }
    
    return result.join('');
};
console.log(decoder('0h2xce5ngbrdy'),'\n');
