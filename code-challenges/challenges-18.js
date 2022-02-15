'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let string = str.split(" ");
    // console.log(string);
       let mid = Math.floor(string.length/2);
    // console.log(mid);
       let char = string[mid].split("");
    // console.log(char);
     return char.length;
    
}

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let result =false;
    
    let array1 =str1.split("");
    let array2 =str2.split("");
    let sum1=0;
    let sum2=0;
    for(let i=0 ;i<array1.length ;i++){
    
      sum1 +=array1[i].charCodeAt();
      
    }
    for(let i=0 ;i<array2.length ;i++){
    
      sum2 +=array2[i].charCodeAt();
      
    }
    
    if(sum1 === sum2){
    
result= true;}

    return result
         
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };