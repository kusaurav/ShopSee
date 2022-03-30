const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const { use } = require("express/lib/application");
const encoder = bodyParser.urlencoded({ extended: false });

const res = require("express/lib/response");
const app = express();


app.use("/assets", express.static("assets"));

app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "saurav52270", //your password of mysql connection
    database: "shopping" //Database name you want to use 
});

// connect to the database
connection.connect(function(error) {
    if (error) throw error
    else console.log("connected to the database successfully!")
});


app.get("/login", function(req, res) {
    res.render('login');
})
app.get("/", function(req, res) {
    res.render('login');
})

app.get("/loginUnsuccess", function(req, res) {
    res.render('loginUnsuccess');
})

app.get("/register", function(req, res) {
    res.render('register');
})
app.get("/registeredAlready", function(req, res) {
    res.render('registeredAlready');
})
app.get("/loginAfterReg", function(req, res) {
    res.render('loginAfterReg');
})
var userId;
var username;
app.post("/login", encoder, function(req, res) {
    var useremail = req.body.useremail;
    var password = req.body.password;

    connection.query("select * from users where userEmail = ? and password = ?", [useremail, password], function(error, results, fields) {
        if (results.length > 0) {
            username = results[0].firstName.toUpperCase();
            userId = results[0].customerId;

            res.redirect("/home");
        } else {
            res.redirect("/loginUnsuccess");

        }
        res.end();
    })
})

app.get("/home", function(req, res) {
    connection.query("select * from items", function(error, results, fields) {
        res.render('home', { results, userId, username });
    })
})
app.get("/books", function(req, res) {
    connection.query("select * from items where type = \"book\"; ", function(error, results, fields) {
        res.render('book', { results });
        console.log(results);
    })
})
app.get("/cart", function(req, res) {
    connection.query("select distinct * from cart left join items on items.productId=cart.productId where customerId = ?", userId, function(error, results, fields) {
        console.log(userId);
        res.render('cart', { results, username });
        console.log(results);
    })
})
app.get("/about", function(req, res) {
    res.render('about', { username });
})
app.get("/mobile", function(req, res) {
    connection.query("select * from items where type = \"mobile\"; ", function(error, results, fields) {
        res.render('book', { results });
        console.log(results);
    })
})

app.get('/home/(:productId)', function(req, res, next) {
    var productid = req.params.productId


    connection.query("insert into cart values (?,?);", [productid, userId], function(err, result, fields) {

        if (err) {


            console.log(err);
        } else {
            console.log("success");
            res.redirect("/home");
        }
    })
})

app.post("/register", encoder, function(req, res) {
    var firstname = req.body.firstname;
    var password = req.body.password;
    var lastname = req.body.lastname;
    var useremail = req.body.useremail;

    connection.query("insert into users(firstName, lastName, userEmail, password) values (?,?,?,?);", [firstname, lastname, useremail, password], function(error, results, fields) {

        if (error) {
            console.log(error);

            res.redirect("/registeredAlready");

        } else {

            res.redirect("/loginAfterReg");
        }
        res.end();
    })
})


app.post("/userdelete", encoder, function(req, res) {

    connection.query("delete from users where customerId = ?;", userId, function(error, results, fields) {
        if (error) {
            res.send(`<h1> Can't Delete Your Account </h1>`);
            console.log(error);
        } else {
            res.redirect("/accountdelete");
        }
        res.end();
    })
})


app.get("/logout", function(req, res) {
    res.render('logout');

})

app.get("/accountdelete", function(req, res) {
    res.render('accountdelete');
})


// set app port 
app.listen(3000);