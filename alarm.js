var h2 = document.getElementById('clock');
// display current time by the second

var currentTime = setInterval(function() {

    var date = new Date();

    var hours = date.getHours();
    console.log(hours);
    if (hours > 12) {
        hours = (12 - (date.getHours()));
    }

    var minutes = date.getMinutes();

    var seconds = date.getSeconds();

    var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


    //convert military time to standard time

    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours;
    }

    h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;

}, 1000);


/*functions to get hour, min, secs,
  am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

function hoursMenu() {

    var select = document.getElementById('alarmhrs');
    var hrs = 12

    for (i = 1; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}
hoursMenu();

function minMenu() {

    var select = document.getElementById('alarmmins');
    var min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minMenu();

function secMenu() {

    var select = document.getElementById('alarmsecs');
    var sec = 59;

    for (i = 0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secMenu();

function display() {

    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById('result').innerHTML = "Hide Alarm";
    } else {
        x.style.display = "none";
        document.getElementById('result').innerHTML = "View Alarm";
    }


}

function alarmSet() {

    var hr = document.getElementById('alarmhrs');

    var min = document.getElementById('alarmmins');

    var sec = document.getElementById('alarmsecs');

    var ap = document.getElementById('ampm');


    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;


    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;

    if (typeof(Storage) !== "undefined") {
        // Store
        window.localStorage.setItem("alarmHistory", JSON.stringify(alarmTime));

    } else {
        document.getElementById("history").innerHTML = "Sorry, your browser does not support Web Storage...";
    }


    document.getElementById('alarmhrs').disabled = true;
    document.getElementById('alarmmins').disabled = true;
    document.getElementById('alarmsecs').disabled = true;
    document.getElementById('ampm').disabled = true;
    document.getElementById('setButton').disabled = true;

    //when alarmtime is equal to currenttime then give popup
    var h2 = document.getElementById('clock');
    var i;
    // Retrieve from local storage
    var table = document.getElementById("myTab");
    var row = table.insertRow(i);
    //var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);

    i = i + 1;
    //cell1.innerHTML = date.getdate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    cell2.innerHTML = JSON.parse(window.localStorage.getItem("alarmHistory"));





    /*function to calcutate the current time
    then compare it to the alarmtime
    */

    setInterval(function() {

        var date = new Date();

        var hours = date.getHours();
        if (hours > 12) {
            hours = (12 - (date.getHours()));
        }
        var minutes = date.getMinutes();

        var seconds = date.getSeconds();

        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


        //convert military time to standard time

        if (hours < 0) {
            hours = hours * -1;
        } else if (hours == 00) {
            hours = 12;
        } else {
            hours = hours;
        }

        var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
        //console.log('currentTime:' + currentTime);

        if (alarmTime == currentTime) {
            window.confirm("It's Time!!!!");
        }

    }, 1000);





}


function alarmClear() {

    document.getElementById('alarmhrs').disabled = false;
    document.getElementById('alarmmins').disabled = false;
    document.getElementById('alarmsecs').disabled = false;
    document.getElementById('ampm').disabled = false;
    document.getElementById('setButton').disabled = false;
}
window.onbeforeunload = function(e) { localStorage.clear(); };