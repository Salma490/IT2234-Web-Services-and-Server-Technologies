//print the nested Array
//[[1,2,30],[5,6],[8,5,3]]
let nestedArr = [[1,2,10],[5,6],[8,5,3]]
nestedArr.forEach((row)=>{
	row.forEach((x)=>{
		console.log(x)
	})
})

nestedArr.forEach((x)=>{
	console.log(x)
})