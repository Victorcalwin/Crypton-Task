// add number at start of array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");

console.log(fruits)
// add number at start of array
fruits.pop();

console.log(fruits)

//  add element at 2nd index

function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = 99;
 
    arr.splice(index, 0, element);
   console.log(arr)
}
insertElement()

// remove first element

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1)

// add new last element
 // Create an array named arr
 let arr1 = [1, 2, 3, 4, 5];
   
 // Add some value in the array
 arr1.push(6);
 arr1.push(7);
 arr1.push(8);
 
 // Print the array
 console.log(arr1)