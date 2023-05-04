ob={name:"John",age:30,address:{city:"local street",dis:"Washington",country:"USA"},
    display:function(){
        console.log("objectsis ")
    }}

console.log(ob)
ob.display()
console.log(ob.name)
console.log(ob.address.country)
console.log(ob["name"])

ob["Gender"]="Male"
ob.name="Abraham"
console.log(ob)