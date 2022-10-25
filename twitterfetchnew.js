var Twitter = require('twitter');
require ('dotenv').config();

const apiKey = 'process.env.API_KEY';
const apiSecret = 'process.env.API_SECRET';
const accessToken = 'process.env.ACCESS_TOKEN';
const accessTokenSecret = 'process.env.ACCESS_TOKEN_SECRET';


var client = new Twitter({
    consumer_key: 'apiKey',
    consumer_secret: 'apiSecret',
    access_token_key: 'accessToken',
    access_token_secret: 'accessTokenSecret'
});

var params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
}
);



