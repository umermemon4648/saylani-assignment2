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


/*
Q5: Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.
*/

//Here is the Solution of Q5
const mainHeading = document.querySelector('#main-heading') //reference of main heading defined at the top of html
const bgColorInput = prompt("Enter Any color") //taking color name as input
function changingElementBgColor(elementRef ,bgColor){
    elementRef.style.backgroundColor= bgColor
}
changingElementBgColor(mainHeading ,bgColorInput)



/*
Q6: Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
*/


// Q6 solution
const mySelf = {
    name: "Muhammad Umer",
    age: 21,
    city: "Karachi",
    skillSet: ["MERN Stack", "ReactJS", "NextJS", "Google Certified UI/UX Designer", "Python Dev"]
}
function saveObjectToLocalStorage(objKey ,mySelfObj){
    localStorage.setItem(objKey, JSON.stringify(mySelfObj))
}
saveObjectToLocalStorage("intro" ,mySelf)


/*
Q7: Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.
*/


// Q7 solution
function retrieveObjectFromLocalStorage(objKey){
    let retrievalData = JSON.parse(localStorage.getItem(objKey))
    console.log(retrievalData)
}
retrieveObjectFromLocalStorage("intro")


/*
Q8: Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.
*/


// Q8 Solution
function saving_retrievalObject(myObj){
    // saving each property to localStorage
    for(let propName in myObj){
        localStorage.setItem(propName, JSON.stringify(myObj[propName]))
    }

     // Retrieve the object from localStorage and return it as a new object
  let newObj = {};

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    newObj[key] = JSON.parse(localStorage.getItem(key))
    
  }
  return newObj
}

let myObj = {
    make: "Toyota",
    model: "Fortuner 4x4 Legender",
    year: 2022,
    color: "white",
    engine: {
      cylinders: 4,
      displacement: 2800,
      horsepower: 204
    },
    features: ["360-degree camera", "LED headlights", "heated seats", "4x4 drive system"]
  };
  
  // Save the object to localStorage
  let savedObj = saving_retrievalObject(myObj);
  
  console.log(savedObj)
  