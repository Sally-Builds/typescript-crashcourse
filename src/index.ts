//Basic Primitive types

let id: number = 5;
let company: string = "Sally-Builds";
let isEaryl: boolean = true;
let likes: any = "real";
likes = 10;

//initialization
let boy: string;
boy = '9';
let myArr: number[] = [90]
myArr.push(5)

//Tuple
let person: [string, number, boolean] = ['Sally ',38, false]
let employees: [string, number][];
employees = [
    ['Jane', 1],
    ['John', 2],
    ['Jil', 3],
]

//Union
let pid: string | number = 56
pid = '56'

//Enum: by default the first is equated to 0
enum Direction1 {
    up = 8,
    down,
    left, 
    right
}

enum Direction2 {
    up = 'up',
    down = "down",
    left = "left", 
    right = "right"
}

//Object
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Sally'
}

//better way
type User = {
    id: number,
    name: string,
}
const user2: User = {
    id: 1,
    name: 'Builds'
}

//Type assertion
let uid: any = 1
let cid = <number> uid
//another way to do this
let cid2 = uid as number

//Functions
function addNum(x:number, y:number):number {
    return x + y
}
    //Void - function that doesnt have a return statement
function printMessage(message:number):void {
    console.log(message)
}

//Interface
interface UserInterface {
    //below i want the id to be a readonly, so we can achieve that by adding the readonly keyword right before the id.
    //in that way id cannot be updated
    readonly id: number,
    name: string,
    //below i want the age to be optional so as not to get a warning
    age?: number
}

const user3: UserInterface = {
    id: 1,
    name: "Joshua"
}

//Major difference between interface and type is that type can be used for primitives and union whereas interface is 
//used for objects or Functions. therefore it's advisable to use interface for object and use type for primitives or unions. eg below
type Point = number | string

// Using Interface in a Function
interface MathFunc {
    (x:number, y:number):number
}
const addVals: MathFunc = (h:number, y:number):number => h + y


//Classes
    //interface for classes
    interface PersonInterfaace {
        id: number,
        name: string,
        welcome():string
        // age?:number
    }
class Person implements PersonInterfaace {
    // We have the public, private and protected variable scope in typescrypt
    // 1) Private means the variable is only accessible from within the class
    // 2) protected means that it is available from within this class or any other class that is extended from this class
    // 3) Public means it can be accessbile from anywhere. this is also the default
        id: number
        name: string
        // private age: number

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }

    welcome() {
        return `${this.name}, We are glad to have you.`
    }
}
const Joshua = new Person(1, 'Joshua')

// Subclasses: Extending classes
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const newEmp = new Employee(1, 'Josh', "Backend Dev")
console.log(newEmp.welcome())


//Generics: reusable components (Advanced)

function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

const numArray = getArray([1, 2, 3, 4])
const strArray = getArray(['Luomy', 'Jane', 'sally',])

/**
 * this wont give an error/warning even though it is a string because 
 * when defining getArray we specified the input to be of type any.
 * this is where the typescript generics come into play, by placing a placeholder during function definition.
 */

numArray.push('5')

    //Solving the issue with Generics
    /**
     * 
     *  NB: <T> is just a placeholder, it could be anything you want to use. 
     */
    function getArrayAns<T>(items: T[]): T[] {
    return new Array().concat(items)
    }

    const numArrayAns = getArrayAns<number>([1,2,3])
    // numArrayAns.push('hellow')
    const strArrayAns = getArrayAns<string>(['Luomy', 'Jane', 'sally',])
    // strArrayAns.push(true)