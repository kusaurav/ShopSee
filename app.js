const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const { use } = require("express/lib/application");
const encoder = bodyParser.urlencoded({ extended: false });
const bcrypt = require("bcrypt");
var nodemailer = require('nodemailer');
const res = require("express/lib/response");
const app = express();


app.use("/assets", express.static("assets"));
app.set('view engine', 'ejs');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sauravkumar52270@gmail.com',
        pass: 'qeksqvyedpdvepqh'
    }
});
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sk123", //Password of mysql connection
    database: "shopsee", //Database name 
    multipleStatements: true
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
    res.render('register');
})

app.get("/about", function(req, res) {
    res.render('about', { username });
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
app.get("/logout", function(req, res) {
    res.render('logout');

})

app.get("/accountdelete", function(req, res) {
    res.render('accountdelete', { username });
})

var userId;
var username;
var useremailformail;
app.post("/login", encoder, async function(req, res) {
    var useremail = req.body.useremail;
    var password = req.body.password;
    connection.query("select * from users where userEmail = ?", [useremail], function(error, results, fields) {
        if (results.length > 0) {
            useremailformail = useremail;
            username = results[0].firstName.toUpperCase();
            userId = results[0].customerId;
            var pass = results[0].password;
            if (bcrypt.compareSync(password, pass))
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
app.get("/book", function(req, res) {
    connection.query("select * from items where type = \"book\"; ", function(error, results, fields) {
        res.render('type', { results, username, userId });

    })
})
app.get("/cart/checkout", function(req, res) {
    var mailOptions = {
        from: 'sauravkumar52270@gmail.com',
        to: useremailformail,
        subject: 'Shopsee Order',
        text: 'Thanks for shopping with us.'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    connection.query("select * from address where customerId =?", userId, function(error, results, fields) {
        if (results.length) {
            res.render('recieved', { username });
        } else { res.render('checkout', { username, userId }); }
    })

})
app.get("/recieved", function(req, res) {
    res.render('recieved', { username });
})
app.get("/mobile", function(req, res) {
    connection.query("select * from items where type = \"mobile\"; ", function(error, results, fields) {
        res.render('type', { results, username, userId });

    })
})
app.get("/laptop", function(req, res) {
    connection.query("select * from items where type = \"laptop\"; ", function(error, results, fields) {
        res.render('type', { results, username, userId });

    })
})
app.get("/cloth", function(req, res) {
    connection.query("select * from items where type = \"cloth\"; ", function(error, results, fields) {
        res.render('type', { results, username, userId });

    })
})
app.get("/shoes", function(req, res) {
    connection.query("select * from items where type = \"shoes\"; ", function(error, results, fields) {
        res.render('type', { results, username, userId });

    })
})
app.get("/electronics", function(req, res) {
    connection.query("select * from items where type = \"electronics\"; ", function(error, results, fields) {
        res.render('type', { results, username, userId });

    })
})
app.get("/sport", function(req, res) {
    connection.query("select * from items where type = \"sport\"; ", function(error, results, fields) {
        res.render('type', { results, username, userId });

    })
})

app.get("/cart", function(req, res) {
    connection.query("select distinct * from cart left join items on items.productId=cart.productId where customerId = ?", userId, function(error, results, fields) {

        res.render('cart', { results, username, userId });

    })
})


app.get('/home/(:productId)', function(req, res, next) {
    var productid = req.params.productId


    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {


            console.log(err);
        } else {

            res.redirect("/home");
        }
    })
})
app.get('/book/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/book");
        }
    })
})



app.get('/mobile/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/mobile");
        }
    })
})

app.get('/laptop/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/laptop");
        }
    })
})

app.get('/electronics/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/electronics");
        }
    })
})

app.get('/sport/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/sport");
        }
    })
})

app.get('/shoes/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/shoes");
        }
    })
})
app.get('/cloth/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("insert into cart values (?,?);", [userId, productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/cloth");
        }
    })
})

app.get('/cart/(:productId)', function(req, res, next) {
    var productid = req.params.productId
    connection.query("delete from cart where productId = ?; ", [productid], function(err, result, fields) {

        if (err) {
            console.log(err);
        } else {


            res.redirect("/cart");
        }
    })
})

app.post("/register", encoder, async function(req, res) {
    var firstname = req.body.firstname;
    //var password = req.body.password;
    var lastname = req.body.lastname;
    var useremail = req.body.useremail;
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    //console.log(hashPassword);
    var mailOptions = {
        from: 'sauravkumar52270@gmail.com',
        to: useremail,
        subject: 'Shopsee registration',
        text: 'Welcome to shopsee, explore the world at your home'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    connection.query("insert into users(firstName, lastName, userEmail, password) values (?,?,?,?);", [firstname, lastname, useremail, hashPassword], function(error, results, fields) {

        if (error) {
            console.log(error);

            res.redirect("/registeredAlready");

        } else {
            res.redirect("/loginAfterReg");
        }
        res.end();
    })
})


app.post("/cart/checkout", encoder, function(req, res) {
    var address = req.body.address;
    var city = req.body.city;
    var pincode = req.body.pincode;
    var state = req.body.state;

    connection.query("insert into address values (?,?,?,?,?);", [userId, address, city, pincode, state], function(error, results, fields) {

        if (error) {
            console.log(error);

            res.send("Can't Process Your Request")

        } else {

            res.redirect("/recieved");
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
app.listen(process.env.PORT || 3000);