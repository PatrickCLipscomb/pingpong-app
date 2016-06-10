var list = [];

$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    list = [];
    userInput = $('input#number').val();
    $('ul#result').append('<li>' + pingpong(userInput) + '</li'>;
  });

var pingpong = function(input) {
  var number = parseInt(input);
  for (var i = 1; i <= number; i++) {
    if ( i % 15 === 0 ) {
      list.push('pingpong');
    } else if ( i % 5 === 0 ) {
      list.push('pong');
    } else if ( i % 3 === 0) {
      list.push('ping');
    } else {
      list.push(i);
    }

  }

});
