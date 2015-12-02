//gets the variables from the GET method
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
return vars;
}

function  initialize() {
 var map = new google.maps.Map($("#prof")[0], {
    center: {lat: -33.866, lng: 151.196},
    zoom: 15
  });

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails({
    placeId: getUrlVars()["id"]
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          'Place ID: ' + place.place_id + '<br>' +
          place.formatted_address + '</div>');
        infowindow.open(map, this);
      });

if (status === google.maps.places.PlacesServiceStatus.OK) {
      if(place.photos !== undefined){
		$("#prof").append("<img width ='85' pxclass='media-object' src='"  + place.photos[0].getUrl({
            'maxWidth': 65,
            'maxHeight': 45,
        })
      +"' alt='test'></a></div>");
		}else{
		$("#prof").append();
		}
	
	$("#rest").append(place.name);
	$("#phone").append(place.formatted_phone_number);
	$("#add").append(place.formatted_address);
	$("#webpage").append("<a href='" + place.website+ "'>Website" +"</a><br />");
	
	for (var i = 0; i < place.reviews.length; i++) {
	$("#review").append("<div id='listitem' style='border-bottom:1px solid white; color:white; style='text-align:center;height:200px;''" + i + "' class='media col-lg-12'>" +place.reviews[i].author_name+"<br />"  +place.reviews[i].text+"<br />Rating: "  +place.reviews[i].rating +"/5<br />"  +"</div>");
	}
  }

    
  
}
  });
}

function handlePlaces (result, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
      if(result.photos !== undefined){
		$("#prof").append("<img width ='85' pxclass='media-object' src='"  + results[i].photos[0].getUrl({
            'maxWidth': 65,
            'maxHeight': 45,
        })
      +"' alt='test'></a></div>");
		}else{
		$("#prof").append();
		}
	
	$("#rest").append(place.name);
	$("#phone").append(place.formatted_phone_number);
	$("#add").append(place.formatted_address);
	$("#webpage").append("<a  href=" + place.website +"> Link to restaurant's website </a><br>");
	
	for (var i = 0; i < place.reviews.length; i++) {
	$("#reviews").append("<div id='listitem' style='border-bottom:1px solid white; color:white; style='text-align:center;height:200px;''" + i + "' class='media col-lg-12'>" +place.review[i] +"</div>");
	}
  }
}



function getStars(rating){
  if(rating >0.5 && rating < 1.5){
      return " <span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if(rating > 1.5 && rating < 2.5){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if (rating > 2.5 && rating < 3.5){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if (rating > 3.5 && rating < 4.5){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if(rating > 4.5 && rating < 5){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span></span><span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if(rating == 5){
      return" <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span></span><span class='glyphicon glyphicon-star'></span>";
    }
    else{
      return "";
    }
}

