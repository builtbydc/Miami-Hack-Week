let map;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
let global_lat = 25.9420;
let global_lng = -80.2456;
let global_zoom = 8;

function success(pos) {
    var crd = pos.coords;
    global_lat = crd.latitude;
    global_lng = crd.longitude;
    initMap(crd.latitude, crd.longitude);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    initMap(global_lat, global_lng);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function initMap(lat, long) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: long },
        zoom: 8,
        minZoom: 2,
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: true,
        rotateControl: true,
        fullscreenControl: false
    });
}