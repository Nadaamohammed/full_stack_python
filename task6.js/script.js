/* Function accept a full name string and convert each letter of
first world to Capital and the remaining to small (Pascal Case).
*/

function fullName(string ){
    var str =string.split(' ');
    const capitalizedWords = str.map(str=> str.charAt(0).toUpperCase() + str.slice(1));
    return capitalizedWords.join(' ');
    
}

let final=fullName(" wellcome to my program");
console.log(final);
/*- Function that accept a sentence and return the longest word
within the input
*/

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
let result=longestWord("hello my name is nadaabdelrahman");
console.log(result);
/*Write a JavaScript Function that returns a passed string with
letters in alphabetical order
*/
function alphabeticalOrder(string){
    var str= string.split('').sort().join('');
    return str;
    
}
let alpha=alphabeticalOrder("javascript");
console.log(alpha);
/*- Define an array of numbers [2,1,3,2,7,2,8,4,3,6,10,9,12]*/
var myArry= new Array(2,1,3,2,7,2,8,4,3,6,10,9,12);
/* Sort them ascending then descending and print the result on
console as table.*/
var ascending= myArry.slice().sort(function(a, b) { return a - b; }); //1,2,3,4,6,7,8,9,10,12
var descending= ascending.slice().reverse();// 12,10,9,8,7,6,4,3,2,1
console.log("ascending =" );
console.table(ascending);
console.log("descending = ");
console.table(descending);
/* Filter numbers larger than 5 (use ES6 arrow function )
*/
var filter = myArry.filter((element)=> element>5);
console.log("large than 5"+ filter);
/* Display Max and Min Number 
 		Note: Using Math functions (Math.max and Math.min)*/
var maxNum= Math.max(...myArry);
var minNum=Math.min(...myArry);
console.log("max = " + maxNum);
console.log("min = ", minNum);
/* Use Array.from function to generate a copy from this array but
		elements will be multiplied by 5.*/
function multiplied(myArry){
    for(var i=0 ;i<myArry.length;i++){
        myArry[i] = myArry[i]*5;
    }
    return myArry;
}
console.log(multiplied(myArry));

/* Remove repeated numbers from the array*/
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(myArry));
/* Display the array elements from pervious step as string
		concatenated with  * */
var remove=removeDuplicates(myArry);
var element = remove.join('* ');
console.log("elements is " + element);

/*5- Write a JavaScript function to get the month name from a
particular date and display the result on alert.*/
function getMonthName(date) {
   
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var monthIndex = date.getMonth();
    var monthName = monthNames[monthIndex];

    alert("The month is " + monthName);
}

var date = new Date("2024-07-30");
getMonthName(date); // Displays: "The month is July"
