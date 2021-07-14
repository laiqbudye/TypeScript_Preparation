1. type annotations for functions
    - code we add to tell TS what type of arguments a function will receive & what type of values it will return.
    - works for both input args & return values
    

2. type inference for functions
    - TS tries to figure out what type of value a function will return
    - only works for return values



//1. type annotations with functions

const add = (a: number, b: number): number => {     // for input args we need specify the type, TS wont do that for us.
    return a + b;
}


as per our definition type inference only works with return values so in the above example we can avoid adding return type manually.

const add = (a: number, b: number) => {    
    return a + b;      // here TS will find out return type on its own
}   


but in the same example lets say we accidently forgot to add return keyword

const add = (a: number, b: number) => {    
    a + b;      // here TS will assign 'void' as a return type becoz it doesnt return anything
}  


so to avoid such scenarios we should always add return type manually instead of depending on TS.



-------------------------------------------------------------------------------------------------------
    
Examples with function definition
    
 - function add(a: number, b: number): number {
        return a + b;    
    }

--------------------------------------------------------------------------------------

if we have a function that is not going to return anything then we can assign its return type as "void"

Note: with void we can return null or undefined from the function.


const logger = (message: string): void => {
    console.log(message);                  // here this function is not returning anything, hence return type is void
    
    return null;
    return undefined;                  // this is possible with void.. (only null or undefined we can return from a function with void)
}




