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
