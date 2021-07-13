type annotation - is a code that we(developers) add to tell typescript what type of value a variable will refer to

type inference  - typescript tries to figure out what type of value a variable refers to


examples with type annotations

1. Variable annotations

let apples: number = 5;   // this is type annotation, we are specifying number type here
    // here we cant assign value other than number to apples

apples = "fresh"; // here it will throw error saying ---> Type 'string' is not assignable to type 'number'


let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;


//built in objects

let now: Date = new Date();



2. Array annotations


let colors: string[] = ['red', 'blue', 'green'];    // here we cant add number or other type of data except string

let myNumbers: number[] = [1,2,3,4,5]; 

let random: any[] = [1, 'a', true];    // with any type we can add any typee of data


3. classes

class Car {

}

let car: Car = new Car();   // here we are making car of type Car.



4. Object literals

let point: { x: number; y: number} = {   // x & y are both of type number
    x: 10,
    y: 20                        // if we try to make this as string, it will throw error
}





5. functions annotation


const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// first half of example,

const logNumber: (i: number) => void       // here it states that this function expecting i as number & returns nothing. (void means return nothing)







