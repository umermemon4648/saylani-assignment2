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

/*
Q3: Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.

*/

//Here is the Solution of Q3
function addingParagraph(paraText){

    let tag = document.createElement('p')
    tag.innerHTML = paraText
    document.body.appendChild(tag)

}
addingParagraph("Hello! Fellow Developer")



/*
Q4: Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
*/

//Here is the Solution of Q4
function addingNewList(newFruit){
    let tag = document.createElement('li')
    tag.innerHTML = newFruit

    // getting ul element by its id 
    let fruitList = document.querySelector('#fruit-list')
    fruitList.appendChild(tag)
}
addingNewList("Mango")