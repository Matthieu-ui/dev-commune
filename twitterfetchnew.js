var Twit = require('twit')
require('dotenv').config()


const apiKey = 'process.env.API_KEY';
const apiSecret = 'process.env.API_SECRET';
const accessToken = 'process.env.ACCESS_TOKEN';
const accessTokenSecret = 'process.env.ACCESS_TOKEN_SECRET';


var T = new Twit({
    consumer_key: apiKey,
    consumer_secret: apiSecret,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,

});


 
(async () => {
  
  T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    const tweets = data;
    console.log(tweets);
  })
})()
//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
