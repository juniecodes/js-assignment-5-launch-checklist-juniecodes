// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    console.log(document.getElementById("missionTarget"))
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
    
    
                 
 }

//  function validateInput(testInput) {
//     if (testInput === " ") {
//      return "Empty";
//     } else if (isNaN(testInput)) {
//      return "Not a Number"
//     } else {
//      return "Is a Number";
//     }
//  }


function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput) === true ){
        return "Not a Number";
    } else if (isNaN(testInput) === false ){
        return "Is a Number";
    };
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        // if (fuelLevel.value < 10000){
        //     fuelStatus.innerHTML =  "Fuel level is too low for launch";
        //     faultyItems.style.visibility = "visible";
        //     launchStatus.innerHTML = "Shuttle not ready for launch";
        //     launchStatus.style.color = "red";
        // } else if (cargoLevel.value > 10000){
        //     cargoStatus.innerHTML =  "Cargo mass too heavy for launch";
        //     faultyItems.style.visibility = "visible";
        //     launchStatus.innerHTML = "Shuttle not ready for launch";
        //     launchStatus.style.color = "red";
        // } else {
        //     launchStatus.innerHTML = "Shuttle ready for launch";
        //     fuelStatus.innerHTML = "Fuel level is enough for launch";
        //     cargoStatus.innerHTML = "Cargo mass low enough for launch";
        //     launchStatus.style.color = "green";
        // }

        if (fuelLevel.value < 10000 && cargoLevel.value <= 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "#C7254E";
        } else if (fuelLevel.value >= 10000 && cargoLevel.value > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "#C7254E";
        } else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "#C7254E";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "#419F6A";
        }
    };

//     for (let i = 0; i < inputEls.length; i++) {
//         let formFieldValue = inputEls[i].value;

//             if(inputEls[i] === 1) {
//                 pilot = inputEls[i];
//             }
    
//             if(inputEls[i] === 2) {
//                 copilot = inputEls[i];
//             }
    
//             if(inputEls[i] === 3) {
//                 fuelLevel = inputEls[i];
//             }
    
//             if(inputEls[i] === 4) {
//                 cargoLevel = inputEls[i];
//             }
            
//     }
    
//         console.log(pilot, copilot, fuelLevel, cargoLevel)
//         pilotValidated = validateInput(pilot);
//         copilotValidated = validateInput(copilot);
//         fuelLevelValidated = validateInput(fuelLevel);
//         cargoLevelValidated = validateInput(cargoLevel);
    
//         pilotStatus.innerText = `Pilot - ${pilot}`;
//         coPilotStatus.innerText = `Copilot - ${copilot}`;
    
//         if (fuelLevel < 10000) {
//             faultyItems.style.visibility = 'visible';
//             fuelStatus.innerText = `There is not enough fuel for the journey`;
//             launchStatus.innerText = `Shuttle not ready for launch`;
//             launchStatus.style.color = 'red';
//         }
    
//         if (cargoLevel > 10000) {
//             faultyItems.style.visibility = 'visible';
//             cargoStatus.innerText = `There is too much mass for the shuttle to take`;
//             launchStatus.innerText = `Shuttle not ready for launch`;
//             launchStatus.style.color = '#C7254E';
//         }
    
//         if (fuelLevel >= 10000 && cargoLevel <= 10000) {
//             faultyItems.style.visibility = 'visible';
//             launchStatus.innerText = `Shuttle is ready for launch`;
//             launchStatus.style.color = '#419F6A';
//         }

// }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response)     
        return response.json();
    });
    console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;