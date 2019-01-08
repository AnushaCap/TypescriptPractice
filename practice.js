var StartUp = /** @class */ (function () {
    // public static main() {
    //     var users = [];
    //     users.push({"name": "Anusha"});
    //     users["Name1"] = "Anil 1";
    //     users["Name2"] = "Anil 2";
    //     users["Age"] = 33;
    //     console.log(users.length);
    //     let calculateValue = (m,n) => {
    //         console.log(m+n);
    //     }
    //     let subtract = (x,y) => {
    //         console.log(x-y);
    //     }
    //     calculateValue(3,6);
    //     subtract(6,5);
    // }
    function StartUp(name) {
        this.name = 'Anusha';
    }
    StartUp.prototype.getName = function () {
        return this.name;
    };
    StartUp.prototype.setName = function (name) {
        this.name = name;
    };
    return StartUp;
}());
var person = new StartUp("Joe");
console.log(person.name);
// console.log(person.getName());
// person.setName("JO");
// console.log(person.getName());
// StartUp.main();
