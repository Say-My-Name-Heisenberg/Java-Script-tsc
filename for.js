a=[1,4,3,2,32,3]
sum=0
//for (i of a){
    // ssum(i)
// }

// function ssum(item){
    // sum+=item
// }

//a.forEach(ssum)

a.forEach((i)=>{sum+=i})
console.log(sum)


// MAP

a=[1,4,3,2,32,3]

//b=a.map(sqarr)
// function sqarr(item){
    // return (item**2)
// }

b=a.map((i)=>i**2)
console.log(b)  //[ 1, 16, 9, 4, 1024, 9 ]

odd=a.filter((j)=>j%2==0)
odd=a.every((j)=>j%2==0) //false 
odd=a.some((j)=>j%2==0) //true 
console.log(odd) //[ 4, 2, 32 ]

re=a.reduce((t,i)=>t+i)
console.log(re) //45

x=a.includes(3)
xy=a.find((j)=>j%2==0)
console.log(x,xy) //true

j="sdfas"
ar=Array.from(j)
console.log(ar)