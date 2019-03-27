// Set the date we're counting down to
var countDownDate = new Date('April 17, 2019 00:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Now!";
  }
}, 1000);


// Modals
var candidates = document.querySelectorAll('#candidates')
var close = document.querySelectorAll('.close-modal')
for (var i = 0; i < candidates.length; i++) {
    candidates[i].addEventListener('click', function() {
      if (document.getElementById('modal-active')) 
    document.getElementById('modal-active').id = '';
      if (this.querySelector('.modal'))
    this.querySelector('.modal').id = 'modal-active';
    })
}
for (var j = 0; j < close.length; j++) {
    close[j].addEventListener('click', function(e) {
        this.parentElement.id = '';
  e.stopPropagation();
    })
}
