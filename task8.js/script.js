/*.Change the text of a button with the ID "myButton" to "Clicked!" when it is clicked*/
let button = document.getElementById("myButton").addEventListener("click", function() {
    this.textContent = "Clicked!"});

/*2.Display an alert with the message "Button clicked!"
 when a button with the id "alertButton" is clicked. Add classname to this button ”myclass”.*/

 let alertButton=document.getElementById("alertButton").addEventListener("click",
    function(){
     alert('button clicked');
    }
 );

/*3.Change the background color of a div with the ID "colorDiv" to blue when the mouse enters the div.
Change it back to white when the mouse leaves the div*/

const colorDiv = document.getElementById("colorDiv");

    colorDiv.addEventListener("mouseenter", function() {
        colorDiv.style.backgroundColor = "blue";
    });

    colorDiv.addEventListener("mouseleave", function() {
        colorDiv.style.backgroundColor = "white";
    });

/*4.Log the key pressed to the console when a key is pressed inside an input field with the ID "inputField". – hint (use keydown event)*/
let key = document.getElementById('key').addEventListener("keydown", 
    function(event) {
        console.log(`Key pressed: ${event.key}`);
    });


/*5.Display the current value of an input field with the ID "inputField" 
in a div with the ID "displayDiv" when the input field's value changes. – hint (use input event)*/
function DisplayInputContent() {
    let text = document.getElementById("inputField").value;
    document.getElementById("displayDiv").innerHTML = "You wrote: " + text;
}

/*6.Prevent the default action of a link with the ID "myLink" when it is clicked, and display an alert instead.*/
let myLink = document.getElementById("myLink").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("cannot apen the link");
    }
)

/*7.Display the coordinates of the mouse pointer in a div with the ID "mouseDiv" when the mouse moves inside the div.
 – hint (use mousemove event)*/
 const mouseDiv = document.getElementById("mouseDiv");

    mouseDiv.addEventListener("mousemove", function(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        mouseDiv.textContent = `X: ${x}, Y: ${y}`;
    });

/*8.Toggle the visibility of a div with the ID "toggleDiv" when a button with the ID "toggleButton" is clicked.*/
let btu = document.getElementById("toggleButton").addEventListener("click",
function () {
    var x = document.getElementById("toggleDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });

/*9.Increment a counter displayed in a span with the ID "counter" each time a button with the ID "incrementButton" is clicked.*/

let count = 0;
const counterSpan = document.getElementById("counter");
const incrementButton = document.getElementById("increment");

incrementButton.addEventListener("click", function () {
    count++;
    counterSpan.textContent = count;
    
});