// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// [0,1,2,3,4,5,6,7,8]
// function best (arr){
//     let results =[];
//     if (arr.length === 1){
//         return 0
//     }
//     // check the length of the array
//     //  if there is only one item, return 0
//     // else
//     for (let i =1; i < arr.length; i++){
//         for(let k = i -1; k > -1; k --){
//             let difference = arr[i] - arr[k]
//             results.push(difference)
//         }
//        let biggest = result[0]

//        for (let i = 0; i < results.length; i++)
//        if (result[i]> biggest){
//            biggest = results
//        }
//     }
//     // loop through given array
//     // for each num subtract all other numbers before it in array, store thise differences
//     // push number into results arr
//     // find biggest number in results
//     // if biggest number is greater than 0, return num,
//     // otherwise return 0

//     if(biggest > 0){
//         return biggest
//     }else{
//         return 0
//     }
//     }
// let testArr =[5,12,6,9,43,2]
// let oneNum = [5]
// console.log(results)

const best = prices =>{
    let maxDiff = 0
    let lowSoFar
    for(let currentPrice of prices){
        if( lowSoFar === || currentPrice < lowSoFar)
    }
}