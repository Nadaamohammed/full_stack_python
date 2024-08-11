var number1;
var number2=2.9;
var number3=0xff;

var firstName="Nada";
var MiddleName='Mohamed';
let lastName = `Abdelrahman`;
var flag = true;
console.log("This is the External JavaScript file");

console.log(number1);
number1=3;
console.log(number1);
console.log(number2);
console.log(number3);

firstName[3]='A';
console.log(firstName);// nothing change

console.log(typeof(number1));
console.log(typeof(number2));
console.log(typeof(number3));
console.log(typeof(firstName));
console.log(typeof(flag));

var sum= number1+number2;
console.log(sum);

console.log(flag+number2);
console.log(flag+firstName);
console.log(firstName+number1);
console.log(flag*number1);
console.log(number1/lastName);
console.log(flag+number2);

const fullName = `${firstName} ${MiddleName} ${lastName}`;
console.log(fullName);

