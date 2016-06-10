$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    list = [];
    $('li.temp').remove();
    userInput = $('input#number').val();
    pingpong(userInput);
  });
});

var list = [];
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
  list.forEach(function(item) {
    $('ul#result').append('<li class="temp">' + item + '</li>')
  })
};
