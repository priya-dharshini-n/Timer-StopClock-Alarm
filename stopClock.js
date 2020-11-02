//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;
var duration;
//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let n = 1;
//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {

    seconds++;

    //Logic to determine when to increment next value
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    duration = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    console.log(duration);
}



function startStop() {

    if (status === "stopped") {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
        n = 2;
    } else {
        if (n != 1) {
            if (typeof(Storage) !== "undefined") {
                // Store
                window.localStorage.setItem("scHistory", JSON.stringify(duration));

            } else {
                document.getElementById("history").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
            var i;
            // Retrieve from local storage
            var table = document.getElementById("myTab");
            var row = table.insertRow(i);
            //var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(0);

            i = i + 1;
            //cell1.innerHTML = date.getdate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

            cell2.innerHTML = JSON.parse(window.localStorage.getItem("scHistory"));

            window.clearInterval(interval);
            document.getElementById("startStop").innerHTML = "Start";
            status = "stopped";

        }
    }
}

//Function to reset the stopwatch
function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}