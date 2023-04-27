class Main{
    constructor(age,cls){
        this.Age=age
        this.Class=cls
    }
    name="Boss"
    fun()
    {
        console.log("Member method")
    }
}

ob=new Main(10,"H1")
console.log(ob.Age)
console.log(ob.Class)
ob.fun()