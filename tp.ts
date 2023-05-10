const a:number | string = "adfd"  //nuber or string
const b:any = true
console.log(a)
console.log(b)

interface Main{
    a:number;
    hello()
}

class Child implements Main{
    a=10
    hello() {
        console.log("helo")
    }
    display(){
        console.log("displaying")
    }
}

const ob = new Child()
ob.display()