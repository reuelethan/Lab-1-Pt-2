var tempFahr = prompt("What temperature is it going to be? Answer in the number of Degrees Fahrenheit");
var eventType = prompt("What Kind of event are you attending? Casual,Semi-Formal or Formal").toLowerCase();

var shirtType;
if(eventType ==="casual"){
  shirtType = "somthing comfy"
}
else if(eventType ==="semi-formal"){
  shirtType = "a polo"
}
else if(eventType ==="formal"){
  shirtType = "a suit"
}


var coatType; 


if(tempFahr < 200 ){
  coatType = "no jacket"
} 
else if(tempFahr < 70 ){
  
  coatType = "a jacket"
}
else if(tempFahr < 54 ){
  
  coatType = "a coat"
}





//console.log("Since it is " + temp + " degrees and you are going to a " + eventType +" eventType you should wear " + shirtType + " and "+ coatType) 
console.log(`Since it is ${tempFahr} degrees and you are going to a ${eventType} event you should wear ${shirtType} and ${coatType}.`)