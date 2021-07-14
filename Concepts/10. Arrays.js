1. typed arrays
    - arrays where each element is some consistent type of value.
    - supports all functionality of JS arrays.
    - only difference is that in JS, we can store any type of variables inside array but in TS we can store only one type of data. (e.g only strings or only numbers)


const carMakers = ['ford', 'toyota', 'chev'];     // here type inference will do the job & find out its type as "string".


const carMakers: string[] = ['ford', 'toyota', 'chev'];   // if we want to mention the type, that also we can do


// scenario where we can use type annotation is when we declare just empty array 

const carMakers = [];   // here TS will cosider "any" as its return type

// so to avoid any type, we can use type annotation here

const carMakers: string[] = [];    // here the type will be "string"



----------------------------------------------------------------------------------------

Why typed arrays?
  
  - if we use typed arrays, TS can do type inference when extracting values
    
      const carMakers = ['ford', 'toyota', 'chev']; 
      const car = carMakers[0];      // here TS will know that car will be of type string because it knows carMakers if of string type
      

  - prevent us from adding incompatible values to the array
      carMakers.push(100);    // here TS will throw error as we are trying to add number in a string array


--------------------------------------------------------------------------------------------

2. flexible types

if we want to store multiple types of values in a single array, in that case flexible types comes in picture.

e.g 

const arr:  (string | number)[] = ['1', 3, 23];    // here we can store string or numbers inside single array
arr.push(true) ;     // here it will throw an error saying Argument of type 'boolean' is not assignable to parameter of type 'string | number'
 
