function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
return vars;
}

function initialize(){
	$(".row2").append(getUrlVars()['user']);
   if(getUrlVars()["user"]!==undefined){
	$(".row1").append("<a href='homepage.html"+ "?user="+ getUrlVars()["user"] + "'><img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/RM-050_Food_sign.svg/2000px-RM-050_Food_sign.svg.png'></img></a>");
	}else{
	$(".row1").append("<a href='homepage.html><img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/RM-050_Food_sign.svg/2000px-RM-050_Food_sign.svg.png'></img></a>");
	}


	for (var i = 0; i < favourites.length; i++) {
	if(getUrlVars()["user"] == favourites[i]["username"]){
	var rest;
	for(var j = 0; j < restaurants.length; j++){
		if(restaurants[j]["id"] == favourites[i]["restaurant"]){
			rest = restaurants[j]["name"];
		}
	}
	$(".fav").append("<div id='listitem' style='border-bottom:1px solid white; color:white; style='text-align:center;height:200px;''" + i + "' class='media col-lg-12'><a  href='restaurant_profile.html?id=" + favourites[i]["restaurant"] +"'> "+rest +"</a><br></div>");
	}
	}

	for (var i = 0; i < reviews.length; i++) {
	if(getUrlVars()["user"] == reviews[i]["username"]){
	var rest;
	for(var j = 0; j < restaurants.length; j++){
		if(restaurants[j]["id"] == reviews[i]["restaurant"]){
			rest = restaurants[j]["name"];
		}
	}
	$(".review").append("<div id='listitem' style='border-bottom:1px solid white; color:white; style='text-align:center;height:200px;''" + i + "' class='media col-lg-12'>" +reviews[i]["username"]+"<br />"  +rest+"<br />"  +reviews[i].text +"<br /></div>");
	
	}
	}

}
