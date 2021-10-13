// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// describe("leetTranslator", () => {
//     var secretCodeWord1 = "Lackadaisical"
//     var secretCodeWord2 = "Gobbledygook"
//     var secretCodeWord3 = "Eccentric"
//     it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
//         expect(leetTranslator(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(leetTranslator(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(leetTranslator(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })
// Going to create a function.
// make that string an array w/ .split("")
// Now we have a new array and every value is a letter from the string
// create a new function that takes in the array iterates through each value using .map()
// write if/elseif/else statements 
// for each value : if i === 'a' return 4, if i === 'e' return 3, if i === 'i' return 1, if i === 'o' return 0; else return i
// convert array .join("")

// b) Create the function that makes the test pass.

function codeWord(string){
    var arrayCode = string.split("")
    const code = (arrayCode) => {
        return arrayCode.map(value => {
            if (value === 'a' || value === 'A'){
                return '4'
            }
            else if (value === 'e' || value === 'E'){
                return '3'
            }
            else if (value === 'i' || value === 'I'){
                return '1'
            }
            else if (value === 'o' || value === 'O'){
                return '0'
            }
            else {
                return value
            }
        })
    }
    return code(arrayCode).join("")
}
codeWord(secretCodeWord1)
codeWord(secretCodeWord2)
codeWord(secretCodeWord3)

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// describe("findCommonLetter", () => {
//     var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
//     var letterA = "a"
//     // Expected output: ["Apple", "Banana", "Orange"]
//     var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
//     var letterE = "e"
//     // Expected output: ["Cherry", "Blueberry", "Peach"]
//     it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
//         expect(findCommonLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
//         expect(findCommonLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
/
// }

// // b) Create the function that makes the test pass.

// // First, make a function that takes in a string and an array of strings
// // use .filter to return only the truthy
// // filter through the array to determine if each string value in the array contains the letter
// // use .includes to see if the letter is in that string value when the letter is lowercase OR when it is uppercase 

nwFruits = (str, arr) => {
    return arr.filter(fruit => fruit.includes(str) || fruit.includes(str.toUpperCase()))
}
nwFruits(letterA, arrayOfWords1)
nwFruits(letterE, arrayOfWords2)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// describe("fullHouse", () => {
//     var hand1 = [5, 5, 5, 3, 3]
//     var hand2 = [5, 5, 3, 3, 4]
//     var hand3 = [5, 5, 5, 5, 4]
//     it("takes in an array of 5 numbers and determines whether or not the array is a full house (exactly one pair and one three of a kind)", () => {
//         expect(fullHouse(hand1)).toEqual(true)
//         expect(fullHouse(hand2)).toEqual(false)
//         expect(fullHouse(hand3)).toEqual(false)
//     })
// })
// b) Create the function that makes the test pass.

// Make a function that takes in an array.
// Full house = need two unique cards
// How many times the first number in the array occurs???
// How many times the first value occurs in the array?
// Increment the count of the first number in the array for how when it occures
// Now we find the second unique number in the array and 
// the next humber in the array that doesnt equal to the first number
// if count of the first unique number is not two or three return false
// find the cound of the second unique number
// if count of this number is not two or three then return false 
// if the count of the first unique number is 2 or 3 AND the count of the second unique number is 2 or 3 then return true 

const fullHouse = (array) => {
    let count = [0,0]
    let secondNum = 0
    for (i=0; i<5; i++){
        if (array[0] == array[i]){
            count[0]++
        }
        else {
            secondNum = array[i]
        }
    }
    if ((count[0] !== 2) && (count[0] !== 3)){
        return false
    }
    for (i=0; i<5; i++){
        if (array[i] === secondNum){
            count[1]++
        }
    }
    if ((count[1] !==2) && (count[1] !==3)){
        return false
    }
    return true
}

fullHouse(hand1)
fullHouse(hand2)
fullHouse(hand3) 
