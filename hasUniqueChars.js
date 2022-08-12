
// Given a word, return true if that word contains only unique characters. Return false otherwise.

// Write your code below
function hasUniqueChars(word){
    let hasUniqueChars = new Set([])
    for (let i = 0; i < word.length; i++){
        hasUniqueChars.add(word[i])
    }
    return hasUniqueChars.size ===word.length
}