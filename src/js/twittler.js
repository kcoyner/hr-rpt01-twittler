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

  // buildTwits();
  var $twitColumnHead = document.getElementById('twitColumnHead');
  // var $refreshTwits = $('<button type="button" id="refreshButton"></button>');
  // $refreshTwits.prependTo($twitColumnHead);
  // var $clearTwits = $('<button type="button" id="clearTwits"></button>');
  // $clearTwits.prependTo($twitColumnHead);

  var $updateButton = $('<button type="button" id="updateButton">Update</button>');
  $updateButton.prependTo($twitColumnHead);
  $('#updateButton').on('click', function() {
    // clearTwits();
    // window.location.reload(true);
    // buildTwits();
    buildTweets();
    renderTweets();
  });

  var $clearButton = $('<button type="button" id="clearButton">Clear</button>');
  $clearButton.prependTo($twitColumnHead);
  $('#clearButton').on('click', function() {
    clearTwits();
    // $('#clearButton').text('back home');
  });
  buildTweets();
  renderTweets();


});

// streams.home is an array of twit objects {created_at, message, user}
// window.users is an array of user names (strings)
// streams.users is an object { user: [the users messages as {}] }

var tweetArray = [];

var buildTweets = function() {
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

// var buildTweets = function() {
//   // var index = streams.home.length - 1;
//   // var $twitTime = '';
//   var index = tweetArray.length - 1;
//   while(index >= 0){
//     var tweet = streams.home[index];
//     // $twitTime = tweet.created_at.toLocaleTimeString();
//     var $tweet = $('<div .twits></div>');
//     $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ::   ' +  tweet.created_at );
//     console.log('tweet.: ', tweet.created_at);
//     tweetArray.push($tweet);
//     index -= 1;
//   }
//   sortTweets(tweetArray, 'created_at');
//   // console.log('tweetArray: ', tweetArray[0]);
// };

var renderTweets = function() {
  var $twitColumn = document.getElementById('twitColumn');
  $(twitColumn).empty();
  tweetArray = tweetArray.slice(0, 15);
  // var index = tweetArray.length - 1;
  // var index = tweetArray.slice(0,20);
  // var $tweet = '';
  tweetArray.forEach((tweet,idx) => {
    tweet = tweetArray[idx];
    var $twitTime = tweet.created_at.toLocaleTimeString();
    var $tweet = $('<div .twits></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ::   ' +  $twitTime );
    $tweet.appendTo($twitColumn);

  });

  // while(index >= 0){
  //   var tweet = tweetArray[index];
  //   var $twitTime = tweet.created_at.toLocaleTimeString();
  //   var $tweet = $('<div .twits></div>');
  //   $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ::   ' +  $twitTime );
  //   // console.log('tweetArray: ', tweetArray);
  //   // $tweet = tweetArray[index];
  //   $tweet.appendTo($twitColumn);
  //   index -= 1;
  // }

};


// // streams.home is an array of twit objects {created_at, message, user}
// var buildTwits = function() {
//   var $twitColumn = document.getElementById('twitColumn');
//   var index = streams.home.length - 1;
//   $(twitColumn).empty();
//   streams.home = sortTweets(streams.home, 'created_at');
//   while(index >= 8){
//     var tweet = streams.home[index];
//     var $twitTime = tweet.created_at.toLocaleTimeString();
//     var $tweet = $('<div .twits></div>');
//     $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ::   ' +  $twitTime );
//     $tweet.appendTo($twitColumn);
//     index -= 1;
//   }
// };

function clearTwits() {
  var $twitColumn = document.getElementById('twitColumn');
  $(twitColumn).empty();
  // window.location.reload(true);
}

function sortTweets(array) {
  return array.sort((a, b) => {
    return b.created_at - a.created_at;
  });
}

// function setUser(){
//   var clickedUser=$(this).text();
//   window.watchedUser = clickedUser;
//   state = !state;
//   buildTwits();
// }

