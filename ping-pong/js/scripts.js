var list = [];
var pingCounter = 0
var pongCounter = 0
var pingpongCounter = 0

$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    list = [];
    $('li.temp').remove();
    var userInput = $('input#number').val();
    pingpong(userInput);
    for (var i = 0; i < list.length; i += 1) {
      if ( i < 40 ) {
        list.forEach(function(item) {
          $('ul#result1').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 80 ) {
        list.forEach(function(item) {
          $('ul#result2').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 120 ) {
        list.forEach(function(item) {
          $('ul#result3').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 160 ) {
        list.forEach(function(item) {
          $('ul#result4').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 200 ) {
        list.forEach(function(item) {
          $('ul#result5').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 240 ) {
        list.forEach(function(item) {
          $('ul#result6').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 280 ) {
        list.forEach(function(item) {
          $('ul#result7').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 320 ) {
        list.forEach(function(item) {
          $('ul#result8').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 360 ) {
        list.forEach(function(item) {
          $('ul#result9').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 400 ) {
        list.forEach(function(item) {
          $('ul#result10').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 440 ) {
        list.forEach(function(item) {
          $('ul#result11').append('<li class="temp">' + item[i] + '</li>')
        });
      } else if ( i < 480 ) {
        list.forEach(function(item) {
          $('ul#result12').append('<li class="temp">' + item[i] + '</li>')
        });
      }
    }
  });
});

$(document).ready(function() {
  $('form#randInt').submit(function(event) {
    event.preventDefault();
    list = [];
    pingCounter = 0;
    pongCounter = 0;
    pingpongCounter = 0;
    $('li.temp').remove();
    var randomNumber = Math.floor(500 * Math.random());
    $('#randomn').text(randomNumber);
    pingpong(randomNumber);
  });
  $('form#numberGuesser').submit(function(event) {
    event.preventDefault();
    list = [];
    $('li.temp').remove();
    var userInput1 = parseInt($('input#guess1').val());
    var userInput2 = parseInt($('input#guess2').val());
    var userInput3 = parseInt($('input#guess3').val());
    debugger;
    if ( userInput1 === pingCounter && userInput2 === pongCounter && userInput3 === pingpongCounter ) {
      $('h2#guesser').text("Wow, great guess! You nailed it.")
    } else {
      $('h2#guesser').text("Missed it, better luck next time brotato.")
    }
  });
  $('form#giveup').submit(function(event) {
    event.preventDefault();
    $('ul#answer').show();
    $('li#ping').text("There are " + pingCounter + " pings.");
    $('li#pong').text("There are " + pongCounter + " pongs.");
    $('li#pingpong').text("There are " + pingpongCounter + " pingpongs.");
  })
});

// $(document).ready(function() {
//   $('form#numberGuesser').submit(function(event) {
//     event.preventDefault();
//     list = [];
//     $('li.temp').remove();
//     var userInput1 = $('input#guess1').val();
//     var userInput2 = $('input#guess2').val();
//     var userInput3 = $('input#guess3').val();
//     debugger;
//     if ( userInput1 === pingCounter && userInput2 === pongCounter && userInput3 === pingpongCounter ) {
//       $('h2#guesser').text("Wow, great guess! You nailed it.")
//     } else {
//       $('h2#guesser').text("Missed it, better luck next time brotato.")
//     }
//   });
// });

var pingpong = function(input) {
  pingCounter = 0;
  pongCounter = 0;
  pingpongCounter = 0;
  var number = parseInt(input);
  for (var i = 1; i <= number; i++) {
    if ( i % 15 === 0 ) {
      list.push('ping-pong');
      pingpongCounter += 1
      pongCounter += 1
      pingCounter += 1
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
};
