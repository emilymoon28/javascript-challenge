// from data.js
var tableData = data;

//grab the botton
var botton=d3.select("#filter-btn");

//grab users input value
var dateField=d3.select("#datetime");

//grab the table body element
var tbody=d3.select("tbody");


// botton.on("click",getResult);
dateField.on("change",getResult);




function getResult() {
    var inputDate=d3.event.target.value;
    console.log(inputDate);
    var selectedEvents = tableData.filter(event=>event.datetime===inputDate);
    console.log(selectedEvents);
};

