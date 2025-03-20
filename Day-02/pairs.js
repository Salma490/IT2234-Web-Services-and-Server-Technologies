//write a code find the all pairs that sum up to the target
let arr4=[1,2,3,4,5,6]
let target=7

for(let i=0; i<arr4.length; i++){
	for(let j=0; j<arr4.length; j++){
		if(arr4[i]+arr4[j]==target){
			console.log(arr4[i]+" "+arr4[j])
		}
	}
}