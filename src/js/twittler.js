/*
Show the user new tweets somehow. (You can show them automatically as they're
created, or create a button that displays new tweets.)

Display the timestamps of when the tweets were created. This timestamp should
reflect the actual time the tweets were created, and should not just be
hardcoded.

Design your interface so that you want to look at and use the product you're
making.

Allow the user to click on a username to see that user's timeline.
*/

$(document).ready(function(){
  // var $body = $('body');
  // $body.html('');
  // refreshTwits();
  buildTwits();
  var $twitColumnHead = document.getElementById('twitColumnHead');
  // var $refreshTwits = $('<button type="button" id="refreshButton"></button>');
  // $refreshTwits.prependTo($twitColumnHead);
  // var $clearTwits = $('<button type="button" id="clearTwits"></button>');
  // $clearTwits.prependTo($twitColumnHead);

  var $updateButton = $('<button type="button" id="updateButton">Update</button>');
  $updateButton.prependTo($twitColumnHead);
  $('#updateButton').on('click', function() {
    buildTwits();
  });

  var $clearButton = $('<button type="button" id="clearButton">Clear</button>');
  $clearButton.prependTo($twitColumnHead);
  $('#clearButton').on('click', function() {
    clearTwits();
    // $('#clearButton').text('back home');
  });


});

var buildTwits = function() {
  var $twitColumn = document.getElementById('twitColumn');
  var index = streams.home.length - 1;
  while(index >= 8){
    var tweet = streams.home[index];
    var $twitTime = tweet.created_at.toLocaleTimeString();
    var $tweet = $('<div .twits></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ::   ' +  $twitTime );
    $tweet.appendTo($twitColumn);
    index -= 1;
  }
};

function clearTwits() {
  var $twitColumn = document.getElementById('twitColumn');
  window.location.reload(true);
}


// function setUser(){
//   var clickedUser=$(this).text();
//   window.watchedUser = clickedUser;
//   state = !state;
//   buildTwits();
// }

