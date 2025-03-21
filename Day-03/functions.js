function PrintMsg(){
	console.log("Hello, JS")
}
PrintMsg()

function sum(){
	return 5+6
}
console.log(sum())

function sub(a,b){
	return a-b
}
console.log(sub(5,3))

//write a boolean function to find a given number is prime
function prime(n){
	for(let i=2; i<n; i++){
		if(n%i == 0){
			return false
		}
	}
	return true
}
console.log(prime(9))

//write recursive function to print numbers from 1 to n
function printNumber(n)
{
    if(n===1){
        console.log(1);
        return;
    }
    else {
        printNumber(n-1);
        console.log(n)
    }
}
printNumber(5)