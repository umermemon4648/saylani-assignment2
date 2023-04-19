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