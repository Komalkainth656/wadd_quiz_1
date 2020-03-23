//var statement is used to declare a variable and  optionally, we can intialize the value of that variable

var a = 10;
console.log(a); // output 10

//let statement allows to create a variable with the scope limited to the block on which it is used.


let a =10;
 console.log(a);  // output 10
  if(true){
   let a=20;
   console.log(a); // output 20
  }
  console.log(a);  // output 10
}

//const statement values can be assigned once and cannot be reassigned. 

Example: const a =10;

function nodeSimplified(){
  const MY_VARIABLE =10;
  console.log(MY_VARIABLE);  //output 10 
}