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
  var $body = $('body');
  $body.html('');

  var $button = $('<button type="button">Refresh</button>');
  $button.prependTo($body);

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($body);

    index -= 1;
  }

});
