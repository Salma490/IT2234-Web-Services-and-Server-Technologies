//find the common elements btw a & b
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]

for(let x=0; x<a.length; x++){
	for(let y=0; y<b.length; y++){
		if(a[x]==b[y])
			console.log(a[x])
	}
}