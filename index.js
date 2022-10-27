const express = require('express');
app = express();
require ('dotenv').config();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

const userRoute = require('./routes/User');
const tweetRoute = require('./routes/Tweets');
const spacesRoute = require('./routes/Spaces');

app.use('/user', userRoute);
app.use('/tweets', tweetRoute);
app.use('/spaces', spacesRoute);


app.listen(PORT, () => { console.log('Server running on port ' + PORT) });


