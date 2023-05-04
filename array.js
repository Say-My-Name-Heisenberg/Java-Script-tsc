a=["apple",1,2,3,true]
a[2]="kiwi"
a[5]="kiwi"
a[7]="kiwi"
console.log(a)      //[ 'apple', 1, 'kiwi', 3, true, 'kiwi', <1 empty item>, 'kiwi' ]
console.log(a.length)   //8
b="aappllee"
console.log(b.length)   //8
console.log(typeof(a))  //object

// a={name:"anjan"}         // false
console.log(Array.isArray(a)) //True




