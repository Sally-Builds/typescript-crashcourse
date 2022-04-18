# Typescript Crash course notebook

## Topics Covered: 
    -   Primitive Variables
    -   Initializaiton
    -   Tuples
    -   Union 
    -   Enum
    -   objects
    -   Type Assertion
    -   Functions
    -   interface
    -   Classes
    -   Class interface implementation
    -   Subclasses
    -   Generics


### Primitive Variables

```typescript
let name: string = "Joshua"
let age: number = 24
let isMarried: boolean = false
let magicNumber: any = 'four'
```

### Intialization

```typescript
let githubName: string;
githubName = 'Sally-Builds'

//array initialization
const arr: string[] = []
```

### Tuples

```typescript
let user:[number, string, number] = [1, "Joshua", 24]

//array of tuples
const casts:[number, string][];
casts = [
    [1, 'Denzel Washington'],
    [2, 'Adam Sandler'],
]
```

### Union
```typescript
let pid: string | number = '89'
pid = 45
```

### Enum
```typescript
enum Level {
    level1,
    level2,
    level3,
    level4,
    level5
}
console.log(Level.level1) => 0
console.log(Level.level2) => 1

enum LevelUp {
    level1 = 1,
    level2,
    level3,
    level4,
    level5,
}
console.log(Level.level1) => 1
console.log(Level.level2) => 2

enum LevelWords {
    level1 = "one",
    level2 = "two",
    level3 = "three",
    level4 = "four",
    level5 = "five",
}
console.log(Level.level1) => 'one'
console.log(Level.level2) => 'two'
```

```typescript
const user: {
    name: string
    age: number,
} = {
    name: 'Sally',
    age: 24
}

//A Better approach
type Person = {
    name: string,
    age: number
}

const user: Person = {
    name: "John Doe",
    age: 30
}

```


### Type Assertion
```typescript
let id:any = 1
const uid: <number> = id

//another approach
const uid = id as number
```

### Functions
```typescript
function Map(x:number, y:number):number {
    return x/y
}

const message = (name:string):string => {
    return `Hello ${name}, You are highly welocome to our seminar`
}

//Sometimes a function may have no return statement: in this case it returns void
const printLog = (log):void => {
    console.log(log)
}
```

### Interface
```typescript
/** 
 * interfaces are just like types but the major difference is that types can be used for primitives and union
 * whereas interface is used for functions and objects.
 * NB - Take note of the syntactical difference, as interface doesnt make use of an equal sign
 * when defining whereas type has the equal sign when defining
*/
interface User: {
    readonly id: number, // an element can be readonly in an interface meaning it cannot be change once defined
    age: number,
    name: string,
}


//using interface in an object
const employee: User = {
    id: 1,
    age: 35,
    name: 'Brad Pitt'
}

employee.id = 2 //produces an error because id is readonly and cannot be changed

//using interface in a function
interface MathFunc: {
    (a:number, b:number):number
}
const sumNum: MathFunc (a:number, b:number):number => a + b
```

### Classes

```typescript
class Person {
    /** 
     * In typescript classes have three kinds of variables namely
     * public, private, and protectd
     * 1) The public is the default when declaring a variable in the outer scope, it means that the variable can be accessed from any where
     * 2) The private variable means that the variable can only be accessed inside the class.
     * 3) The protected variable means that the variable can only be accessed from within the class and also the subclasses.
    */
    id: number
    name: string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }

    message() {
        return `Hello ${this.name}, Welcome to the circus:japanese_goblin:!!!`
    }
}

const jane = new Person(1, 'Jane doe')
console.log(jane.message()) => `Hello ${this.name}, Welcome to the circus:japanese_goblin:!!!`

// Using Classes with interface
interface carInterface: {
    name: string,
    color: string,
    numOfwheels: number,
    startCar():string,
}

//we use the implements keyword
class Car implements CarInterface {
    name: string,
    color: string,
    numOfWheels: number

    constructor(name:string, color:string, numOfWheels:number) {
        this.name = name
        this.color = color
        this.numbOfWheels = numOfWheels
    }

    startCar() {
        return `Car Starting...:steam_locomotive:`
    }
}
const bima = new Car('BMW', 'Red', 4)
console.log(bima.name) => 'BMW'
console.log(bima.startCar()) => `Car Starting...:steam_locomotive:`

    //Subclasses
    class interior extends Car {
        engine: string

        constructor(name:string, color:string, numOfWheels:number, engine:string) {
            super(name, color, numOfWheels)
            this.engine = engine
        }
    }

    const interiorOfBima = new Car('BMW', 'blue', '4', 'V8')
```

### Generics

```typescript
function addArr(items: any[]): any[] {
    return new Array().concat(items)
}
const addArrNum = addArr([2, 3, 4, 5])
const addArrStr = addArr(['hay', 'wei', 'yay'])

addArrNum.push('Hello')
//As we can see the addArr is not strict because we could  push a string to the addArrNum and it will work just fine
//even though we want the array to be just numbers.
//To overcome this we use the generic

function addArr<A>(items: <A>[]): <A>[] {
    return new Array().concat(items)
}

const addArrNum = addArr<number>([2, 3, 5, 6]) //pushing a string to this array will result in an error.

```