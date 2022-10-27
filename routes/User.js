const express = require('express');
const router = express.Router();


app.get('/', (req, res) => {    
    res.send({data: 'here is your data'});
}),

app.post('/', (req, res) => {
    res.send({data: 'User created'});
}),

app.put('/', (req, res) => {
    res.send({data: 'User updated'});
}),

app.delete('/', (req, res) => {
    res.send({data: 'User deleted :('});
});

module.exports = router;
