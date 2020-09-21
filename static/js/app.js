// from data.js
var tableData = data;

//grab the botton
var botton=d3.select("#filter-btn");



//grab the table body element
var tbody=d3.select("tbody");


botton.on("click",getResult);
//dateField.on("change",getResult);

//show the whole table (in progress)
tableData.forEach((insight) => {
    var row=tbody.append("tr"); 
    Object.entries(insight).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value);
    });
});


function getResult() {
    d3.event.preventDefault();

    //grab users input value
    var inputDate=d3.select("#datetime");
    var inputCity=d3.select("#city");
    var inputState=d3.select("#state");
    var inputCountry=d3.select("#country");
    var inputShape=d3.select("#shape");


    var dateValue=inputDate.property("value");
    var cityValue=inputCity.property("value");
    var stateValue=inputState.property("value");
    var countryValue=inputCountry.property("value");
    var shapeValue=inputShape.property("value");

    var selectedEvents = tableData.filter(event=>{
        
        return ((event.datetime===dateValue || dateValue=="") &&
            (event.city===cityValue || cityValue=="") &&
            (event.state===stateValue || stateValue=="") &&
            (event.country===countryValue || countryValue=="")&&
            (event.shape===shapeValue || shapeValue==""))
    });
    
    console.log(dateValue);
    console.log(cityValue);
    console.log(stateValue);
    console.log(countryValue);
    console.log(shapeValue);

    if (selectedEvents.length===0){
        alert("No matching UFO Sightings found");
        return false;
    };

    //clear previous search results
    tbody.html("");

    //display the array to the page as a table
    selectedEvents.forEach((insight)=> {
        var row=tbody.append("tr"); 
        Object.values(insight).forEach((value)=>{
            var cell=row.append("td");
            cell.text(value);
        });

    });
};



