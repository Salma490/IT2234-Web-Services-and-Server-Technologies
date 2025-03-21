//arrow function
const msg = ()=>{
    return console.log("Hello JS")
}
console.log(msg)
msg()

//arithmetic operations using parameter pass
const sum2=(num1, num2)=>{
    return num1+num2
}
console.log(sum2(12,45))

const sub2=(num1, num2)=>{
    return num1-num2
}
console.log(sub2(12,45))

//default parameter
const mult=(a,b=2)=>{
    return a*b
}
console.log(mult(4,5))
console.log(mult(7))

//rest parameter
const mysum = (...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum(4,8,69,54,54)

//better way
const mysum2 = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum2(4,8,69,54,54))

//callback function
//a function passed as an argument
const greet = (msg,fun)=>{
	console.log("Hi..."+msg)
	fun()
}
greet("Good morning",()=>{
    console.log("My name is Salma")
})

//multiply a number by n
const multtwo = (n)=>n*2
const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multtwo,8,857,84,58,48)