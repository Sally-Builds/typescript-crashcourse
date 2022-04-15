"use strict";
//Basic Primitive types
let id = 5;
let company = "Sally-Builds";
let isEaryl = true;
let likes = "real";
likes = 10;
//initialization
let boy;
boy = '9';
let myArr = [90];
myArr.push(5);
//Tuple
let person = ['Sally ', 38, false];
let employees;
employees = [
    ['Jane', 1],
    ['John', 2],
    ['Jil', 3],
];
//Union
let pid = 56;
pid = '56';
//Enum: by default the first is equated to 0
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 8] = "up";
    Direction1[Direction1["down"] = 9] = "down";
    Direction1[Direction1["left"] = 10] = "left";
    Direction1[Direction1["right"] = 11] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
//Object
const user = {
    id: 1,
    name: 'Sally'
};
const user2 = {
    id: 1,
    name: 'Builds'
};
//Type assertion
let uid = 1;
let cid = uid;
//another way to do this
let cid2 = uid;
//Functions
function addNum(x, y) {
    return x + y;
}
//Void - function that doesnt have a return statement
function printMessage(message) {
    console.log(message);
}
const user3 = {
    id: 1,
    name: "Joshua"
};
const addVals = (h, y) => h + y;
class Person {
    // private age: number
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    welcome() {
        return `${this.name}, We are glad to have you.`;
    }
}
const Joshua = new Person(1, 'Joshua');
// Subclasses: Extending classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const newEmp = new Employee(1, 'Josh', "Backend Dev");
console.log(newEmp.welcome());
//Generics: reusable components (Advanced)
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(['Luomy', 'Jane', 'sally',]);
/**
 * this wont give an error/warning even though it is a string because
 * when defining getArray we specified the input to be of type any.
 * this is where the typescript generics come into play, by placing a placeholder during function definition.
 */
numArray.push('5');
//Solving the issue with Generics
/**
 *
 *  NB: <T> is just a placeholder, it could be anything you want to use.
 */
function getArrayAns(items) {
    return new Array().concat(items);
}
const numArrayAns = getArrayAns([1, 2, 3]);
// numArrayAns.push('hellow')
const strArrayAns = getArrayAns(['Luomy', 'Jane', 'sally',]);
// strArrayAns.push(true)
