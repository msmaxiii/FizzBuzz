// Write a function to remove all duplciate letters from a provided string. The string will only contain lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// helowrd

// >>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu


// define a function
// it will only take a string as an argument
//  .toLowerCase()
// .split('')
// .join('')

// loop through the string
// 

// Write your solution below:
function makeUnique(str){
    let uniqueStr = ""

    for (let i =0; i < str.length; i++){
        if (uniqueStr.includes(str[i])){
            continue

            uniqueStr +=str[i]
        }
    }return uniqueStr
}


makeUnique('helloworld')
makeUnique('iwanttoclimbamountain')



