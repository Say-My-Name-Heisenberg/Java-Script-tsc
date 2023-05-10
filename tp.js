var a = "adfd"; //nuber or string
var b = true;
console.log(a);
console.log(b);
var Child = /** @class */ (function () {
    function Child() {
        this.a = 10;
    }
    Child.prototype.hello = function () {
        console.log("helo");
    };
    Child.prototype.display = function () {
        console.log("displaying");
    };
    return Child;
}());
var ob = new Child();
ob.display();
