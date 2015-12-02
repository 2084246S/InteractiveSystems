//gets the variables from the GET method
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
return vars;
}

function  initialize() {
	map = new google.maps.Map($("#map")[0], {
	    center: {lat: 55.864237, lng: -4.251806},
	    zoom: 8
	  	});
	var places = new google.maps.places.PlacesService(map);

  places.getDetails({
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4'
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      if(results[i].photos !== undefined){
		$("#prof").append("<img width ='85' pxclass='media-object' src='"  + results[i].photos[0].getUrl({
            'maxWidth': 65,
            'maxHeight': 45,
        })
      +"' alt='test'></a></div>");
		}else{
		$("#prof").append();
		}
	
	$("#rest").append("this name");
	$("#phone").append(place.formatted_phone_number);
	$("#add").append(place.formatted_address);
	$("#wesite").append("<a  href=" + place.website +"> Link to restaurant's website </a><br>");
	
	for (var i = 0; i < place.reviews.length; i++) {
	$("#reviews").append("<div id='listitem' style='border-bottom:1px solid white; color:white; style='text-align:center;height:200px;''" + i + "' class='media col-lg-12'>" +place.review[i] +"</div>");
	}
    }
  });
}

function handlePlaces (result, status) {
 if (status === google.maps.places.PlacesServiceStatus.OK) {
		if(results[i].photos !== undefined){
		$("#prof").append("<img width ='85' pxclass='media-object' src='"  + results[i].photos[0].getUrl({
            'maxWidth': 65,
            'maxHeight': 45,
        })
      +"' alt='test'></a></div>");
		}else{
		$("#prof").append();
		}
	
	$("#rest").append("this name");
	$("#phone").append(place.formatted_phone_number);
	$("#add").append(place.formatted_address);
	$("#wesite").append("<a  href=" + place.website +"> Link to restaurant's website </a><br>");
	


	
	}
}



function getStars(rating){
  if(rating >0.5 && rating < 1){
      return " <span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if(rating  > 1 && rating < 1.5){
      return "<span class='glyphicon glyphicon-star'></span>";
    }
    else if(rating > 1.5 && rating < 2){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if (rating > 2 && rating < 2.5){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span>";
    }
    else if (rating > 2.5 && rating < 3){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if (rating > 3 && rating < 3.5){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span>";
    }
    else if (rating > 3.5 && rating < 4){
      return " <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star-empty'></span>";
    }
    else if(rating > 4 && rating < 4.5){
      return" <span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span><span class='glyphicon glyphicon-star'></span>";
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

