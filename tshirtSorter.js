// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// sml

//  >>> tshirtSorter('smllms')
// ssmmll



// Write your solution below:
// const tshirtSorter = (str)=>{
//     return str.split("").sort().reverse().join("");
    
// }
// let str = " slsmmsllsmsmlmsls"
// console.log(tshirtSorter(str));
// console.log(tshirtSorter('lms'));
// console.log( tshirtSorter('smllms'));
// // Second solution

function tshirtSorter(str){
    let small = ""
    let medium = ""
    let large = ""

    for (let i =0; i< str.length; i++ )
    if(str [i] === "s"){
        small += "s"
    }else if (str [i] === "m"){
        medium += "m"
    }else{
        large += "l"
    }

    return small + medium + large
}
let str = " slsmmsllsmsmlmsls"
console.log(tshirtSorter(str));
console.log(tshirtSorter('lms'));
console.log( tshirtSorter('smllms'));