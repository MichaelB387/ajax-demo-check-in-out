// New XMLHttpRequest Object
// var xhr holds the new request object
var xhr = new XMLHttpRequest()
// next is the callback function
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // The information from the webserver is conatined in this property called responseText
        // xhr.responseText
        // This takes the JSON and trys to convert the string into a JS object
        var employees = JSON.parse(xhr.responseText)
        // Use the typeof method which will tell you what type of element it is in the console
        // console.log(typeof employees) the typeof method will reveal that this is an object element in the console.
    }
};
//  Opened a request to get json data
// This is using the 'GET' method to load a file called employees.json
xhr.open('GET', 'data/employees.json');
// send the request
xhr.send();