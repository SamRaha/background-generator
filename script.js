var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

// setting up the gradient to be the background color
function setColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// event listeners for changing of the colors upon selection
color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);



// setting up the initial colors on load
function initialGradientValues(){
    color1.value = "#1f4a39";
    color2.value = "#d54dea";
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;
}

window.onload = initialGradientValues();



// setting up the random button and colors RGB did not work in this case

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

// HEX decimal works
function randomGenHex() {
    var result = "";
    var characters = "ABCDEF0123456789";
    var charLenght= characters.length;
    for (var i=0; i< 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLenght));        
    }
    result = "#" + result;    
    return result;    
}

// setting up the clicking event using .onclick

random.onclick = function randomButton() {
	color1.value = randomGenHex();
	color2.value = randomGenHex();
	setColor();
};





// events



// function changeColour() {
// 	btn.onclick()
// }


// random.onclick = function() {
// 	color1.value = random_rgb();
// 	color2.value = random_rgb();
// };


// for (var i=0; i<10; i++) {
//     console.log( random_rgb() ) ;
// }    


