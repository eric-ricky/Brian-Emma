

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0.375";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.querySelector(".navbar-brand").style.color = "teal";
  } else {
    document.getElementById("navbar").style.padding = "1.375rem";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.querySelector(".navbar-brand").style.color = "white";
  }
}


// COUNTDOWN
var countDownDate = new Date("Dec 6, 2020 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var gap = countDownDate - now;

  var days = Math.floor(gap / (1000 * 60 * 60 * 24));
  var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = "0" + days;
  document.getElementById("hour").innerHTML = "0" + hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (gap < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "WEDDING DAY";
  }
}, 1000);


// PAGE LOADER
var myVar;

function pageLoader() {
  myVar = setTimeout(showPage, 3000);
  console.log('pageloader');
}

function showPage() {
console.log('show page');
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}