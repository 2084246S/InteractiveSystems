
//database for the website. Feel free to hardcode some more things if you feel like it.

var users = [
	{username:"dustymust", password:"mustydust", email:"dustymust@mustydust.com"},
	{username:"fuzzyduck", password:"duckyfuzz", email:"fuzzyduck@duckyfuzz.com"},
	{username:"bossyross", password:"rossyboss", email:"bossyross@rossyboss.com"},
	{username:"flashypod", password:"poddyflash", email:"flashypod@poddyflash.com"},
	{username:"oilyrat", password:"rattyoil", email:"oilyrat@rattyoil.com"},
	{username:"buffyswan", password:"swannybuff", email:"buffyswan@swannybuff.com"},
	{username:"handysand", password:"sandyhand", email:"handysand@sandyhand.com"},
	{username:"icyspice", password:"spicyice", email:"icyspice@spicyice.com"},
	{username:"luckybuzz", password:"buzzyluck", email:"luckybuzz@buzzyluck.com"},
	{username:"battysap", password:"sappybat", email:"battysap@sappybat.com"}
];

var restaurants = [
	{id:"ChIJv8KitZ9GiEgR5Q5yaSI7Di4", name:"Las Iguanas"},
	{id:"ChIJieyxLjNEiEgRtlZaB-NHiNI", name:"Domino's Pizza"},
	{id:"ChIJUXkFXM5FiEgRbcc9PfAUc5A", name:"Ashoka"},
	{id:"ChIJa9TBvp9GiEgRmqet5wMFdVI", name:"Prezzo"},
	{id:"ChIJTRidsJ9GiEgRHMY_7CmEIVc", name:"TGI Fridays"}
]

var favourites = [
	{username:"fuzzyduck", restaurant:"ChIJieyxLjNEiEgRtlZaB-NHiNI"},
	{username:"fuzzyduck", restaurant:"ChIJTRidsJ9GiEgRHMY_7CmEIVc"},
	{username:"icyspice", restaurant:"ChIJv8KitZ9GiEgR5Q5yaSI7Di4"},
	{username:"dustymust", restaurant:"ChIJv8KitZ9GiEgR5Q5yaSI7Di4"},
	{username:"dustymust", restaurant:"ChIJUXkFXM5FiEgRbcc9PfAUc5A"},
	{username:"dustymust", restaurant:"ChIJa9TBvp9GiEgRmqet5wMFdVI"},
	{username:"bossyross", restaurant:"ChIJTRidsJ9GiEgRHMY_7CmEIVc"},
	{username:"bossyross", restaurant:"ChIJa9TBvp9GiEgRmqet5wMFdVI"}
]

var ratings = [
	{username:"fuzzyduck", restaurant:"ChIJieyxLjNEiEgRtlZaB-NHiNI", value:5},
	{username:"fuzzyduck", restaurant:"ChIJv8KitZ9GiEgR5Q5yaSI7Di4", value:4},
	{username:"luckybuzz", restaurant:"ChIJieyxLjNEiEgRtlZaB-NHiNI", value:1},
	{username:"handysand", restaurant:"ChIJUXkFXM5FiEgRbcc9PfAUc5A", value:3}
]

var reviews = [
	{username:"luckybuzz", restaurant:"ChIJieyxLjNEiEgRtlZaB-NHiNI", text:"I ordered a mighty meaty pizza.I was very upset as it turns out it has meat in it and I'm a vegetarian."},
	{username:"dustymust", restaurant:"ChIJv8KitZ9GiEgR5Q5yaSI7Di4", text:"Waited almost an hour for the food, but was worth it in the end."},
	{username:"handysand", restaurant:"ChIJUXkFXM5FiEgRbcc9PfAUc5A", text:"It was K."}
]