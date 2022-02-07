'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    let indexOfLastSpace= str.lastIndexOf(' ')
    
    let lastWord = str.slice(indexOfLastSpace+1)
    return lastWord
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    let newArr = str.split(' ')
    return newArr[newArr.length-1]
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    let newArr = str.split(' ')
    let indexOfI = newArr.indexOf('I')
    let indexOfam = newArr.indexOf('am')
    let indexOfwas = newArr.indexOf('was')
    
  
    if (indexOfI != -1) {
      newArr.splice(indexOfI, 1, 'We')
    }
    if (indexOfam != -1) {
      newArr.splice(indexOfam, 1, 'are')
  
    }
    if (indexOfwas != -1) {
      newArr.splice(indexOfwas, 1, 'were')
  
    }
  
  
    return newArr.join(' ')
}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    arr.splice(5,0,',')

    let newString = arr.join(' ')
  
    return newString
  
}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    let newString = ''
    let sum = 1 
       for(let i = 0 ; i<str.length ; i++){
         
         if(str[i]===str[i+1]){
          sum+=1
         }
         
         
         
         
         else if(str[i] !=' '){
           newString += `${str[i]}${sum}`
           sum=1
         }else{
           newString += `${str[i]}`
           sum=1
         }
       }
       return newString
}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };