//Write a function that takes a list, and using a map function 
//multiples every number in this list by 3 and returns the new list. 
//Call your function to test that it works.

let array = [1,2,3,4,5]

function multiplyBy3(arrayInput) 
{
	let mappedArray = arrayInput.map(elem => elem * 3)
	console.log(mappedArray)
}

multiplyBy3(arrayInput)