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
var bradyMoney = 30;
var doesTomRide;

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

console.log("Today is the day that " + myTourist + " visits " + thePark);
console.log("Tom wants to go on " + rides[0] + ", " + rides[1] + ", " + rides[2] + "," + " and " + rides[3] + "."); 




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

/*
console.log ("The wait is too long for " + rides[0] + "!");
console.log("The line isn't too bad for " + rides[1] + ".");
console.log("The line for " + rides[2] + " is ridiculous!");
console.log("I'll wait in line for " + rides[3] + ".");
*/




