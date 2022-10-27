exports.hello = (req, res) => {
    res.render('hello', {title: 'Hello World'});
};   // Path: controllers\hello.js