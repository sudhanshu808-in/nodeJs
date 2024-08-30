const express = require('express');
const path = require('path'); // Import the path module
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');// helps in rendering ejs pages
app.use(express.static(path.join(__dirname, 'public'))); // Use forward slashes for compatibility

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/profiles/:username", function(req, res) {
    // res.render("index");
    // res.render("index");
    res.send("Hello," + req.params.username);
});

app.get("/profiles/:username/:age", function(req, res) {
    // res.render("index");
    // res.render("index");
    res.send(`Welcome ${req.params.username} of Age  :  ${req.params.age}`);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
