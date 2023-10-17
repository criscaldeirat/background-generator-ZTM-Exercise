//SELECT THE H3
var css = document.querySelector("h3")

//SELECT THE COLORS
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

//SELECT BODY ELEMENT
var body = document.getElementById("gradient")

//DISPLAY THE INITIAL CSS LINEAR GRADIENT PROPERTY ON PAGE LOAD
setGradient();

//**OTHER OPTION:

/*const defaultColor1 = "#0000ff";
const defaultColor2 = "#00ff00";
*/

//STARTUP FUNCTION WILL MAKE THE WINDOW REACT ON PAGE LOAD TO THE DEFAULT COLORS WE PICKED IN THE CODE ABOVE, AND SHOW THE CODE TO USERS COPY
window.addEventListener("load", startup);

function startup() {
	color1 = document.querySelector(".color1");
	color1.value = defaultColor1;
	color1.select();
	color2 = document.querySelector(".color2");
	color2.value = defaultColor2;
	color2.select();

//PUT THE RIGHT CODE WHEN THE PAGE IS LOADED
  	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}
          
/*SELECT THE BUTTON*/
var randomButton = document.getElementById("Random");



//CHANGE BACKGOUND STYLE
//USE AN EVENT THAT NOTICES COLOR PICK
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//create only one function to not repeat
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
};

//Add a random button which generates two random numbers for the colour inputs
function getRandomColor() {
	//Select the numbers and letters that will be used
	var letters = "0123456789ABCDEF";
	var color = "#";
	//Creat a loop function to creat random colors
	for (var i=0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//MAKE THE FUNCTION AND EVENT FOR EACH ONE OF THE INPUT COLORS
function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

randomButton.addEventListener("click", randomColors);