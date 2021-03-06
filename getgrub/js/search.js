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

var pageCoords = [];
var map;
var infowindow;
var geocoder;
var lat;
var lng;
var postcode;
var rating;




function initialize() {
	document.onclick = function(e){
		pageCoords.push([e.pageX, e.pageY]);//get page coordinates and store in array
	}

	$("#showClickMap").click(function(){
		for (var i = 0; i < pageCoords.length; i++) {
			$("body").append("<div class=\"click-circle\" style=\"left:"+(pageCoords[i][0]-5)+"px;top:"+(pageCoords[i][1]-5)+"px\"></div>");
		};
	});

	$("#hideClickMap").click(function(){
		$(".click-circle").remove();
	});





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
	$("#search").val(postcode.replace(/\+/g,"").toUpperCase());
	if(getUrlVars()["rad"] !==undefined){
		var rad = getUrlVars()["rad"];
	}else{
		var rad =500;
	}
	
	$("#search").value=getUrlVars()["search"];
	if(getUrlVars()["rat"] !== undefined){
		rating = getUrlVars()["rat"];
	}else{
		rating =0;
	}

	geocoder.geocode({address: postcode + ",Glasgow, UK"}, function(results, status){
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
				radius: rad,
				types: ["restaurant","tea room","cafes"]
			}, handlePlaces);
	})
}

//display places on the map
function handlePlaces (results, status) {
	if(status == google.maps.places.PlacesServiceStatus.OK){
		for (var i = 0; i < results.length; i++) {

		if(results[i].rating > rating){
			createMarker(results[i]);
	
  if(results[i].photos !== undefined){
	
      $("#nearyou").append("<div id='listitem' style='border-bottom:1px solid white; color:white;height:200px;'" + i + "' class='media col-lg-12' ><div class='map-list-item'><div class='media-left'style='float:left'><img width ='85' pxclass='media-object' src='"  + results[i].photos[0].getUrl({
            'maxWidth': 65,
            'maxHeight': 45,
        })
      +"' alt='test'></a></div><div class='media-body'style='text-align:center;' ><h5 class='media-heading'>" + results[i].name +"</h4><p>" + results[i].vicinity +".</p></div><div class='media-left media-top'></div><div style='text-align:center;'>Rating:" +results[i].rating +"/5" +"<br/><a href='restaurant_profile.html?id="+results[i].place_id+"&user="+localStorage.getItem("username")+"'>profile page</a>"
       +"</div></div></div>");
         }else{
          $("#nearyou").append("<div id='listitem' style='border-bottom:1px solid white; color:white; style='text-align:center;height:200px;''" + i + "' class='media col-lg-12'><div  class='map-list-item'><div class='media-left'</div><div class='media-body'><h5 class='media-heading'>" + results[i].name +"</h4><p>" + results[i].vicinity +".</p></div><div class='media-left media-top'></div><div>Rating:" +results[i].rating +"/5"+"<br/><a href='restaurant_profile.html?id="+results[i].place_id+"'>profile page</a>"
       + "</div></div></div></div>");
         }
        
     
    	}
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
	    infowindow.setContent(place.name+"<br>"+place.vicinity+"<br>"+open+"<br><a href=restaurant_profile.html?id="+place.place_id+">profile page</a>");
	    infowindow.open(map, this);
	});
	
}

