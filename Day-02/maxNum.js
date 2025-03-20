let numArray = [1, 2, 3, 4]

//find the max num in Array using forEach
let max=numArray[0]
numArray.forEach((x)=>{
	if(max<x)		//(max<n)	&&	(max=n)
		max=x
})
console.log(max)
console.log(typeof(numArray))
