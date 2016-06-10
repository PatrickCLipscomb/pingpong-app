$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    list = [];
    $('li.temp').remove();
    var userInput = $('input#number').val();
    pingpong(userInput);
  });
});

$(document).ready(function() {
  $('form#randInt').submit(function(event) {
    event.preventDefault();
    list = [];
    $('li.temp').remove();
    var randomNumber = Math.floor(500 * Math.random());
    $('#randomn').text(randomNumber);
  });
});

$(document).ready(function() {
  $('form#numberGuesser').submit(function(event) {
    event.preventDefault();
    list = [];
    $('li.temp').remove();
    var userInput1 = $('input#guess1').val();
    var userInput2 = $('input#guess2').val();
    var userInput3 = $('input#guess3').val();
  });
});

var list = [];
var pingCounter = 0
var pongCounter = 0
var pingpongCounter = 0
var pingpong = function(input) {
  var number = parseInt(input);
  for (var i = 1; i <= number; i++) {
    if ( i % 15 === 0 ) {
      list.push('ping-pong');
      pingpongCounter += 1
    } else if ( i % 5 === 0 ) {
      list.push('pong');
      pongCounter += 1
    } else if ( i % 3 === 0) {
      list.push('ping');
      pingCounter += 1
    } else {
      list.push(i);
    }
  }
  list.forEach(function(item) {
    $('ul#result').append('<li class="temp">' + item + '</li>')
  })
};
