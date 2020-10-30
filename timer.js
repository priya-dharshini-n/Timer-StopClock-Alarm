var h2 = document.getElementById('timerBar');
var stop = 0;

function setAction() {

    var hr = document.getElementById('timerhrs');

    var min = document.getElementById('timermins');

    var sec = document.getElementById('timersecs');


    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;


    var hours = selectedHour;
    var minutes = selectedMin;
    var seconds = selectedSec;

    if (selectedHour == 0 && selectedMin == 0 && selectedSec == 0) {
        window.confirm("Select a Valid Time!!");
        location.reload();
    }
    var timeClear = setInterval(function() {
        seconds--;

        //Logic to determine when to increment next value
        if (seconds < 0) {
            seconds = 59;
            minutes--;

            if (minutes < 0) {
                minutes = 59;
                hours--;
            }

        }
        h2.textContent = hours + "h " + minutes + "m " + seconds + "s ";
        if (hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(timeClear);
            h2.textContent = "Timer Finished!";
        } else if (stop == 1) {
            clearInterval(timeClear);
            h2.textContent = "Timer Stopped!!";
        }
    }, 1000);
}

function hoursMenu() {

    var select = document.getElementById('timerhrs');
    var hrs = 24;

    for (i = 0; i <= hrs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);

    }
}
hoursMenu();

function minMenu() {

    var select = document.getElementById('timermins');
    var min = 59;

    for (i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
minMenu();

function secMenu() {

    var select = document.getElementById('timersecs');
    var sec = 59;

    for (i = 0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}
secMenu();

function stopAction() {
    stop = 1;

}