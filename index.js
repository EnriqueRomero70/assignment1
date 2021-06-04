let engineIndicatorLight = "red blinking";
let spaceSuitsOn = "true";
let shuttleCabinReady = "true";
let crewStatus = (spaceSuitsOn && shuttleCabinReady);
let computerStatusCode = 400;
let shuttleSpeed = 15000

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus === "true") {
   console.log("Crew Ready ");
}  else if (crewStatus === "false") {
    console.log("Crew Not Ready"); 
}
if (computerStatusCode <= 399) {
   console.log("Please stand by. Computer is rebooting")
}
  else if (computerStatusCode === 400) {
    console.log("Succes! Computer online.")
  }
  else if (computerStatusCode >= 401) {
    console.log("ALERT: Computer offline")
  }