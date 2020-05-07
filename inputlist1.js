document.getElementById('question').innerText = "What's your favorite animal?";

let animals = [];
let parsedAnimals = [];

function submitAnimals() {

    let animalToAdd = document.getElementById('favAnimals').value;

    if (animalToAdd.length !== 0) {
        animals.push(animalToAdd);

        localStorage.setItem('lsAnimalNames', JSON.stringify(animals));
    
        parsedAnimals = JSON.parse(localStorage.getItem('lsAnimalNames'));

        let htmlText = '<ul>'

        for (let i = 0; i < parsedAnimals.length; i++) {
            htmlText = htmlText + `<li>${parsedAnimals[i]}</li>`;
        } 

        htmlText = htmlText + '</ul>'
        document.getElementById('displayList').innerHTML = htmlText;

    } else {
        alert('Enter your fav animal foo!');
    }
}

document.getElementById('displayList').innerText = JSON.parse(localStorage.getItem('lsAnimalNames'));

