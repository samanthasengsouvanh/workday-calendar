//function to display time and date at top of page
let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
console.log(currentTime);
function displayDate () {
    document.getElementById("dateAndTime").innerHTML = currentTime;
};
displayDate();

//get the element that the info goes into
//decide what it should look like
//and then update it
//should this run in a loop and update the clock regularly
//create timeblocks with inputs and save buttons
//loop and dynamically or hard code
//add events to the submit button to save what is in the input to local storage
//get the value out of the local storage and populate input with the data
//check color coordinator based on time moment
//look at css for classes
//store data in local storage as object where the key is the hour of the day
