// Mike Aurin
// SDI 1401
// Project 3
/* In this activity I am demonstrating my knowledge and familiarity with the material using a 
   fictional story about Tom Brady visting Universal Studios in Orlando, Florida. */
 


var getGreetingByName = function(name) {
var currentHour = (new Date()).getHours()
var	timeOfDay;
var greeting;
	if (currentHour < 12) { timeOfDay = "morning"; }
	else if (currentHour < 17) {timeOfDay = "afternoon"; }
	else { timeOfDay = "evening"; }
	greeting = ("Good " + timeOfDay + ", " + name  + "  Let's begin!");
return greeting;
};


var fullGreeting = getGreetingByName("Professor Lee.");
console.log(fullGreeting);


var myTourist;
var rides = ["The Mummy", "Twister", "Jaws", "Shrek"]
var waitTimes= [40, 20, 30, 10];
var thePark = "Universal Studios";
var getSouvenir = true;
var bradyMoney = 40;
var doesTomRide;
var bradyBunch;
var minutesInLine;
var souvenir;

prompt("Who is the Greatest Quarterback ever?");
if (prompt === "Tom Brady") {
	alert("You are a smart man!");
} else {
	prompt("False.  Please enter Tom Brady");
if (prompt === "Tom Brady");
alert("I knew I liked you!");
}
prompt === myTourist
myTourist = "Tom Brady";

console.log("Today is the day that " + myTourist + " and his family visits " + thePark);
console.log(myTourist + " wants to go on " + rides[0] + ", " + rides[1] + ", " + rides[2] + ", and " + rides[3] + ".");
console.log(myTourist + " will not wait more 30 minutes or more for a ride.");

var doesTomRide = function() {

	for (var i = 0; i < rides.length; i++) {
	
		if (rides[i] === "The Mummy") {
		console.log(rides[i] + " has too long of a wait for " + myTourist + ".");
	};
		if (rides[i] === "Twister") {
		console.log(myTourist + " will wait in line for " + rides[i] + ".");
		minutesInLine = 20;
		while (minutesInLine > 0) {
	console.log("Only " + minutesInLine + " minutes left.  Time to check Facebook.");
	minutesInLine = minutesInLine - 5; 
	};
};
console.log("Yay, we're at the front of the line!");
		if (rides[i] === "Jaws") {
		console.log(myTourist + " thinks this line is too long for a ride that doesn't exist anymore!");
	};
		if(rides[i] === "Shrek") {
		console.log(myTourist + " will wait in line to see Shrek.");	
		minutesInLine = 10;
		while (minutesInLine > 0) {
	console.log("Only " + minutesInLine + " minutes left.  Time to check Facebook.");
	minutesInLine = minutesInLine - 5; 
// I understand the Facebook loop is a little ridiculous, started off as an experiment and resulted in a somewhat accurate joke.			
			};
		};
	};
	
};

doesTomRide();

bradyBunch = {

	"kids": [
		
		{
			"firstName": "Zach",
			"age": 12,
			"hungry": true
		},
		{
			"firstName": "Alexa",
			"age": 9,
			"hungry": true
		}
	],
};
console.log(bradyBunch.kids);

	for (var key in bradyBunch.kids){
		
		for(var newKey in bradyBunch.kids[key]){
			if(newKey === "hungry") {
			console.log("It is " + bradyBunch.kids[key][newKey] + " that the kids are hungry.");
			
		};
	};
};


while (minutesInLine > 0) {
	console.log("It's been " + minutesInLine + " minutes.  Time to check Facebook");
	minutesInLine - 5; 

};

console.log("It's about time to start heading home!");



if (getSouvenir === true) {
	console.log(myTourist + " wants an awesome " + thePark + " jacket!");
	if (bradyMoney <= 40 ) {
		console.log("Even " + myTourist + " can’t afford these prices!!");
	}  
if (bradyMoney >= 20) {
		console.log("He'll get this bumper sticker instead...");
	};
} else {
	console.log("I should've gone to Disney World!");
	};



souvenir = function(souvenir) {

bradyMoney = 40;
bradyMoney = bradyMoney - 20;
	
	return bradyMoney; 
	
};

console.log("After visiting the gift shop, Tom Brady has " + bradyMoney + " dollars left over.");

