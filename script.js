// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let document = window.document;
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let launchStatusList = [];

        // let pilot = htmlForm[0].value;
        // let copilot = htmlForm[1].value;
        // let fuelLevel = Number(htmlForm[2].value);
        // let cargoLevel = Number(htmlForm[3].value);


        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === ""){
            alert("All fields are required!");
            event.preventDefault();
        } else {
            formSubmission(document, pilot, copilot, fuelLevel, cargoLevel)
            event.preventDefault();
        };

        // if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "" ) {
        //     alert("All fields are required!");
        //     e.preventDefault();
        // } else {
        //     formSubmission(document, statusList, pilot, copilot, fuelLevel, cargoLevel);
        //     e.preventDefault();
        // }

        //faultyItems.style.visibility = 'visible';
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       //console.log(chosenPlanet);
       
        //console.log(chosenPlanet.name);

       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
    })
   
});