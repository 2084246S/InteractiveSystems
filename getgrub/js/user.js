function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
return vars;
}

function  initialize() {

   if(getUrlVars()["user"]!==undefined){
	$(".row1").append("<a href='homepage.html"+ "?user="+ getUrlVars()["user"] + "'><img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/RM-050_Food_sign.svg/2000px-RM-050_Food_sign.svg.png'></img></a>");
	}else{
	$(".row1").append("<a href='homepage.html><img id='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/RM-050_Food_sign.svg/2000px-RM-050_Food_sign.svg.png'></img></a>");
	}


	for (var i = 0; i < favourites.length; i++) {
	if(getUrlVars()["user"] ===favourites.username){
	$(".fav").append("<a  href='" + favourites.restaurant +"'> add review </a><br>");
	}
	}
}
