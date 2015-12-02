
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

