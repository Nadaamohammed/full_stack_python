/*1- Create function name it printVariables(value1,value2,value3) (as
    function declaration) takes 3 parameters and return them as an
    Array*/

function printVariables1(value1, value2, value3){
   return [value1, value2 , value3];
}

console.log(printVariables1(1,2,3));
console.log("done");

// /*a- try to console.log the values of value1,value2,value3 on
// consumingScript.js file ??
// local variables are not accessible outside function’s block.
// b- Try to call the function before definition line?
// c- Call the function with 3 values then print the return
// d- Try to call the function with less than 3 parameters
// printVariables(3,5) .
// Then solve the problem of undefined variables
// e- What if you call the function with too many parameters ? (nore
// than 3)
// */ 
// /*a*/
function printVariables2(value1, value2, value3){
    console.log(value1);
    console.log(value2);
    console.log(value3);
   return [value1, value2 , value3];
 }
 printVariables2(4,5,6);
 console.log("done");
//  /*b*/

 console.log(printVariables3(0,1,2));
 function printVariables3(value1, value2, value3){
    console.log(value1);
    console.log(value2);
    console.log(value3);
   return [value1, value2 , value3];
 }
 console.log("done");
 

//  /*c*/
 function printVariables4(value1, value2, value3){
    return [value1, value2 , value3];
 }
 let result =  printVariables4(9,8,7);
 console.log("result will be "+ result);
 console.log("done");


 /*d*/
 function printVariables5(value1, value2, value3) {
    return [value1, value2, value3];
}

let result1 = printVariables5(3,5);
console.log(result1);
console.log('done');
// to solve 
function printVariables6(value1 ='def1', value2='def2', value3='def3') {
    return [value1, value2, value3];
}

let result2 = printVariables6(3,5);
console.log(result2);
console.log("done");
/*e*/
function printVariables7(value1, value2, value3) {
        return [value1, value2, value3];
    }
    
let result3 = printVariables7(3,5,8,9,12);
console.log(result3);
console.log('done');

//using arguments

function printVariables8(value1 ='def1', value2='def2', value3='def3') {
    console.log("arguments", arguments);
    return [value1, value2, value3];
}
let result4 = printVariables8(2,4,5,8,0);
console.log(result4);
console.log('done');

/*f- Define var localVar=3; testingVar=5; inside the function’s block
Before calling the function try to console.log the values localVar
and testingVar.??
 */
 function printVariables9(value1, value2, value3) {
    var localVar=3;
    var testingVar=5;
    console.log(localVar);
    console.log(testingVar);
    return [value1, value2, value3];
}

console.log(printVariables9(0,9,8));


/*g- In step f , call the function and try to print localVar and
testingVar?*/
/*function printVariables10(value1, value2, value3) {
    var localVar=3;
    var testingVar=5;
    
    return [value1, value2, value3];
}

console.log(printVariables10(0,9,8));
console.log(localVar);
console.log(testingVar);
/*h- Define the following variable on your script outside the function
let localVar=90;
Before calling the function try to console.log the value
	localVar
then try to console.log localVar after calling the fucntion
Now try to console.log the value of localVar inside the
	function but before variable’s definition line.
Now inside the function what if you remove let from localVar
	and repeat the pervious Steps again?*/
let localVar1=90;
function printVariables11(value1, value2, value3) {
    console.log(localVar1);
    var localVar=3;
    var testingVar=5;
    
    return [value1, value2, value3];
}

console.log(printVariables11(0,9,8));
//
let localVar2=90;
function printVariables12(value1, value2, value3) {
    
    var localVar=3;
    var testingVar=5;
    console.log(localVar2);
    return [value1, value2, value3];
}

console.log(printVariables12(0,9,8));
//
// 
localVar3=90;
function printVariables13(value1, value2, value3) {
    console.log(localVar3);
    var localVar=3;
    var testingVar=5;
    
    return [value1, value2, value3];
}

console.log(printVariables13(0,9,8));

/*  Repeat step 1 but define the function as function expression*/
const printVariables14 = function(value1, value2, value3) {
    return [value1, value2, value3];
};

let result7 = printVariables14(1, 2,3);
console.log(result7); 

/* Repeat step 1 but define the function as arrow function */
const printVariables = (value1, value2, value3) => {
    return [value1, value2, value3];
};

let result9 = printVariables(1, 11,111);
console.log("result9 " +result9);
/*4- Functions accept 2 variables and return the summation result
	Testing:
a- What if you insert less than 2 inputs?
solve this problem using ES6 feature.
b- What if the input is not a Number – hint us isNaN?
Solve this problem using your logic
 */
function sum(num1=0 , num2=0)
{
    return (num1 + num2);
}
let result10= sum(1);//nan without default var
console.log("result10 "+ result10);
//
function sum(num1=0 , num2=0)
{
    if (isNaN(num1) || isNaN(num2)) {
        return 'Both inputs must be numbers';
    }
    return (num1 + num2);
}
let result11 = sum('hello', 4);
console.log("result11 "+ result11);

/*5- Create a function that takes the following:
a- User name using prompt ( required)
if empty show the prompt again to user*/
function getUserName() {
    let userName = prompt("Please enter your name:");

    while (!userName) {
        userName = prompt("Name cannot be empty. Please enter your name:");
    }

    return userName;
}

let name = getUserName();
console.log("User name is:", name);

