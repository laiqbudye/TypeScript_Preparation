
why do we need typescript?
  
  we will understand it using one example

  URL to fetch data:- https://jsonplaceholder.typicode.com/todos/1
  which returns {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}


  
  import axios from 'axios';
  
  const url = https://jsonplaceholder.typicode.com/todos/1;
  
  axios.get(url).then(response => {
    const todo = response.data;
    
    const id = todo.ID;
    const title = todo.Title;
    const finished = todo.Finished;
    
    console.log(`ID is ${id}
      Title is ${title}
      Finished is ${finished}`);
  })


in the above code we have written todo.ID but the api is returning 'id' (small id), so with JS we come to know abt this error at the time of execution only.

to get this kind of errors at the time of development only TYPESCRIPT comes in picture.


typescript code:-
    
  import axios from 'axios';
  
  const url = https://jsonplaceholder.typicode.com/todos/1;
  
  interface Todo {     // this is interface where we can define what fields & type of values it should have
    id: number;
    title: string;
    completed: boolean
  }

  axios.get(url).then(response => {
    const todo = response.data as Todo;    // here todo will have type same as Todo
    
    const id = todo.ID;      // here it will show error as ID is not part of Todo
    const title = todo.Title;    // same error for Title as well
    const finished = todo.completed;   // no error for this 
    
    console.log(`ID is ${id}
      Title is ${title}
      Finished is ${finished}`);
  })



--------------------------------------------------------------------------------------------------------------

Example 2:- 
  
  const id = 100;
  const title = 'helloworld';
  const completed = false;

  
  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`${id} ${title} ${completed}`)
  }

  logTodo(id, completed, title);     // here it will show error for second parameter because in function definition the second param supposd to be sring but we   
                                     // are passing boolean 




so to avoid above scenarios TYPESCRIPT comes in picture.


  
  
  
  
  
