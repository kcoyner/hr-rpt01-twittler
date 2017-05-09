/*
Show the user new tweets somehow. (You can show them automatically as they're
created, or create a button that displays new tweets.)

Display the timestamps of when the tweets were created. This timestamp should
reflect the actual time the tweets were created, and should not just be
hardcoded.

Design your interface so that you want to look at and use the product you're
making.

Allow the user to click on a username to see that user's timeline.

// streams.home is an array of twit objects {created_at, message, user}
// window.users is an array of user names (strings)
// streams.users is an object { user: [the users messages as {}] }

*/

$(document).ready(function(){
  var $tweetColumnHead = document.getElementById('tweetColumnHead');

  var $updateButton = $('<button type="button" id="updateButton">Update</button>');
  $updateButton.prependTo($tweetColumnHead);
  $('#updateButton').on('click', function() {
    buildTweets();
    renderTweets();
  });


/* Receive tweets from data-generator, sort the tweets, and tightly control them.  */
var buildTweets = function() {
  tweetArray = [];
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    tweetArray.push(tweet);
    index -= 1;
  }
  sortTweets(tweetArray);
  tweetArray = tweetArray.slice(0, 500); // never get more than 500 to keep memory use sane
  return tweetArray;
};

/* Take the tweets received from buildTweets() and display at most 15 at a time. 
 * TODO: add user setting to allow choices on the number of tweets displayed.
 */
var renderTweets = function(){
  var $tweetColumn = document.getElementById('tweetColumn');
  $(tweetColumn).empty();
  tweetArray = tweetArray.slice(0, 15);

  tweetArray.forEach((tweet,idx) => {
    tweet = tweetArray[idx];
    $tweetBox = makeTweetBox();
    
    var $user = $('<span style="color:blue" class="user">???</span>');
    tweet.user = `${tweet.user}`;
    $user.text(tweet.user);
    $user.click(setUser);
    $tweetBox.append($user);

    var $tweetMsg = $('<span class="tweetMsg">???</span>');
    $tweetMsg.text(' -- ' + tweet.message);
    $tweetBox.append($tweetMsg);

    var $tweetTime = $('<span class="tweetTime">???</span>');
    $tweetTime.text(' :: ' + tweet.created_at.toLocaleTimeString());
    $tweetBox.append($tweetTime);

    $tweetBox.appendTo($tweetColumn);
  });
};

/* Display tweets filtered by user/author */
var renderUserTweets = function(clickedUser){
  var $tweetColumn = document.getElementById('tweetColumn');
  $(tweetColumn).empty();

  tweetArray = tweetArray.filter(tweet => tweet.user === clickedUser);

  tweetArray.forEach((tweet,idx) => {
    tweet = tweetArray[idx];
    $tweetBox = makeTweetBox();
    
    var $user = $('<span style="color:blue" class="user">???</span>');
    tweet.user = `${tweet.user}`;
    $user.text(tweet.user);
    $tweetBox.append($user);

    var $tweetMsg = $('<span class="tweetMsg">???</span>');
    $tweetMsg.text(' -- ' + tweet.message);
    $tweetBox.append($tweetMsg);

    var $tweetTime = $('<span class="tweetTime">???</span>');
    $tweetTime.text(' :: ' + tweet.created_at.toLocaleTimeString());
    $tweetBox.append($tweetTime);

    $tweetBox.appendTo($tweetColumn);
  });
};

var makeTweetBox = function(){
    var $tweetBox = $('<div class="tweets"></div>');
    var $atSign = $('<span style="color:blue">???</span>');
    $atSign.text('@');
    $tweetBox.append($atSign);
  return $tweetBox;
};

var sortTweets = function(array){
  return array.sort((a, b) => {
    return b.created_at - a.created_at;
  });
};

var setUser = function(){
  var clickedUser=$(this).text();
  renderUserTweets(clickedUser);
};

buildTweets();
renderTweets();

});
