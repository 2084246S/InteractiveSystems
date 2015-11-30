//gets the variables from the GET method
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
return vars;
}

//places a marker on the user location
function homeMarker () {
	//get a different marker image than the default one
	var pinColor = "33CC33";
	var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
	    new google.maps.Size(21, 34),
	    new google.maps.Point(0,0),
	    new google.maps.Point(10, 34));
	//place the marker
	var marker = new google.maps.Marker({
	    position: {lat: lat, lng: lng},
	    map: map,
	    icon: pinImage,
	    title: postcode
	});
	//add an onClick listener
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent("You");
		infowindow.open(map, this);
	});
}


var map;
var infowindow;
var geocoder;
var lat;
var lng;
var postcode

function initialize() {
	//initialize geocoder, maps, places
	geocoder = new google.maps.Geocoder();
	infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map($("#map")[0], {
	    center: {lat: 55.864237, lng: -4.251806},
	    zoom: 8
	  	});
	var places = new google.maps.places.PlacesService(map);

	//retrieve postcode and find coordinates
	postcode = getUrlVars()["search"];
	geocoder.geocode({address: postcode + ", UK"}, function(results, status){
			var result = results[0];
			lat = result.geometry.location.lat();
			lng = result.geometry.location.lng();

			homeMarker();
			//focus the map to the area
			map.panTo({lat: lat, lng: lng});
			map.setZoom(15);

			//search for restaurants
			places.nearbySearch({
				location: {lat: lat, lng: lng},
				radius: 500,
				types: ["restaurant"]
			}, handlePlaces);
	})
}

//display places on the map
function handlePlaces (results, status) {
	if(status == google.maps.places.PlacesServiceStatus.OK){
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
    	}
	}
}

//create marker for a place
function createMarker(place) {
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
	    map: map,
	    position: place.geometry.location
	});

  //show maker info on click
	google.maps.event.addListener(marker, 'click', function() {
		var open = "";
		if(place.opening_hours && place.opening_hours.open_now == true){
			open = "Open";
		}
		if(place.opening_hours && place.opening_hours.open_now == false){
			open = "Closed";
		}
	    infowindow.setContent(place.name+"<br>"+place.vicinity+"<br>"+open);
	    infowindow.open(map, this);
	});
	
}