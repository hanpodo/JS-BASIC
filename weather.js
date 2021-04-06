const API_KEY = "382310e138ff3d9f8a30308d6cd5a38b"
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj);
}

function handleGeoSucces(position){
    const latitude =position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        };
        saveCoords(coordsObj);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadCords === null){
        askForCoords();
    } else {
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();