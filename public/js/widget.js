// New XMLHttpRequest Object
// var xhr holds the new request object
var xhr = new XMLHttpRequest();
// next is the callback function
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // The information from the webserver is conatined in this property called responseText
    // xhr.responseText
    // This takes the JSON and trys to convert the string into a JS object
    var employees = JSON.parse(xhr.responseText);
    // Use the typeof method which will tell you what type of element it is in the console
    // console.log(typeof employees) the typeof method will reveal that this is an object element in the console.
    // creates an unorder html list
    var statusHTML = '<ul class="bulleted">';
    // use a for loop which will run throught the length of the employees object array
    for (var i = 0; i < employees.length; i += 1) {
      // Will start the loop form 0 which is what var i is equal to at the start
      //  if employee JSON status inoffice === true then the </li class="in"> tag will be added to statusHTML
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
    // This will add the employees name 
      statusHTML += employees[i].name;
    //   This closes the <li> tag
      statusHTML += '</li>';
    }
    // closes the statusHTML <ul> tag
    statusHTML +=  '</ul>'
    // will display the statusHTML in the index.html where the element with the id= 'employeeList'
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
//  Opened a request to get json data
// This is using the 'GET' method to load a file called employees.json
xhr.open("GET", "data/employees.json");
// send the request
xhr.send();
