class Main{
    fun(){
        console.log("Hello Fellow")
    }
    name="main"
}

class Sub extends Main{
    name="sub"
}

obj=new Sub
obj.fun()



module.exports = {
   Main,
   Sub
}