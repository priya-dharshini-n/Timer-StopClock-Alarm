function setAction(form){
var countDownDate;
var countDownDate = document.getElementById("tim").value;
  //countDownDate = valueSpan.getTime();
   document.write(countDownDate);
  var timeClear = setInterval(function() {
      var now = new Date().getTime();
      var timeLeft = countDownDate - now;
      document.write(timeLeft);
      var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
         (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      document.querySelector(".timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (timeLeft < 0) {
         clearInterval(timeClear);
         document.querySelector(".timer").innerHTML = "Timer Finished";
      }
   }, 1000);
}
