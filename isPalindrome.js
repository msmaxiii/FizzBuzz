// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// Write your code below

function isPalindrome(word){
    let x = word.length -1
    for(let i = 0; i < word.length -1; i++){
        if (word[i] !==[x]){
            return false;
        }
        x--
    }
    return true
}

