let favRestos = [];
let parsedRestaurants = [];

function addPlaces() {
    let foodSpots = document.getElementById('favRestaurant').value;

    if (foodSpots != 0) {
        console.log('line 8!');

    if (Boolean(localStorage.getItem('foodiePlaces'))) {
        console.log('here!');
        let liveFoodiePlaces = JSON.parse(localStorage.getItem('foodiePlaces'));
        liveFoodiePlaces.push(foodSpots);
        localStorage.setItem('foodiePlaces', JSON.stringify(liveFoodiePlaces));
        displayListOfPlaces();
    } else {
        alert('Type In A Restaurant!');
    }
}
}
function displayListOfPlaces() {
    let parsedRestaurants = JSON.parse(localStorage.getItem('foodiePlaces'));
    let restaurantList = '<ul>';
    for (let i = 0; i < parsedRestaurants.length; i++) {
        restaurantList = restaurantList + `<li>${parsedRestaurants[i]}</li>`;
    }
    restaurantList = restaurantList + '</ul>';
    document.getElementById('listOfFavs').innerHTML = restaurantList;

}

displayListOfPlaces();