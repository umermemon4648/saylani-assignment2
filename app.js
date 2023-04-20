/*
Q1: Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.
*/

//Here is the Solution of Q1

function addWithOffset(x){
    return function (y){
        return `The addition of ${x} and ${y} using closure is ${x+y}`
    }
}

const functionInput = addWithOffset(5)
console.log(functionInput(6))


/*
Q2: Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/

//Here is the Solution of Q2

function searchArrayValue(arr, key, index = 0){
    if(index>=arr.length){
        return false
    }
    else if(arr[index] == key){
        return true
    }
    else{
        return searchArrayValue(arr, key, index+1)
    }
}

const arr = [1,3,5,7,2,4,8,9]
const key = 4

console.log(searchArrayValue(arr, key))