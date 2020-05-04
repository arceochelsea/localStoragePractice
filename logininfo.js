document.getElementById('greeting').innerText = "Welcome!";
document.getElementById('instruction').innerText = "Please Log In With Your Email and Password";


function updateLogIn() {
    localStorage.setItem('email', document.getElementById('emailAddress').value);
    //document.getElementById('eAddress').innerText = 
    localStorage.getItem('email');

    localStorage.setItem('password', document.getElementById('password').value);
    //document.getElementById('pWord').innerText = 
    localStorage.getItem('password');

}
//document.getElementById('eAddress').innerText = 
localStorage.getItem('email');
//document.getElementById('pWord').innerText = 
localStorage.getItem('password');


//first we must access the localStorage: localStorage
//when setting(saving) an item you must add a key and a value! = localStorage.setItem()
//key could be any appropiate name for variable & then the value 
//because we are accessing this in the DOM we must do document.getElementById('name of ID on HTML').value (because we are getting its VALUE ())
//after we complete that line we must then make another line of code to take the HTML's element innerText and equal it to localStorage.GETitem('keyname');
//outside of the function we must then copy that same line of code and put it on the outside as well because we want it to work even when it is not triggered by the button or event!