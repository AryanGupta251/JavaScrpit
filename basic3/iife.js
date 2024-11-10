// Immediately Invoked Function Expressions (IIFE)

// ()() => first parenthesis (defination) , second parenthesis (execution)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Aryan')
