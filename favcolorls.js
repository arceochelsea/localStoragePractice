let favColors = []; //empty because colors that users submit will be pushed here!
let parsedColors = []; //another array because this is where the colors will go after it is parsed!

function updateColorArray() {

    let chosenColor = document.getElementById('color').value; //assigning a variable to the value of the id tag we'd like to get the info from! 
    
    favColors.push(chosenColor); // then push this variable to the array

    if (chosenColor.length != 0) { //next, create if statement! if users input does not equal a blank or ZERO characters typed in then?

        localStorage.setItem('colorArray', JSON.stringify(favColors)); // set the localstorage ('name of varaible', then stringify the variable OG array)
        displayListOfColors(); //call on the function that will display the list!
    } else { 
        alert("ENTER A COLOR FOO!"); //else? what would you like to happen when they dont type anything in the input text? 
    }
}

function displayListOfColors() {
    let parsedColors = JSON.parse(localStorage.getItem('colorArray'));
    let listOfColors = '<ul>';
    for (let i = 0; i < parsedColors.length; i++) {
        listOfColors = listOfColors + `<li>${parsedColors[i]}</li>`;
    }
    listOfColors = listOfColors + '</ul>';
    document.getElementById('colorList').innerHTML = listOfColors;
}
displayListOfColors();
