to work with typescript we need to setup that first.

  - to install 
    npm i typescript
    
    this installation will give us access to 'tsc' command which stands for typescript compiler.
    
    
    so to convert our typescript (.ts) file into .js file
      - tsc index.ts      // this command will generate index.js file which can be understandable by the browser.
      - node index.js     // which will show output on terminal


  but in the above approach we need to run 2 different commands
  so to avoid that we can make use of 'ts-node'  pkg
  
    - to install
     npm i ts-node


so the same process with ts-node pkg will be

    - ts-node index.ts    // here it will convert ts file to js file & also execute that newly generated js file in one go (no need to again xecute that js file)
