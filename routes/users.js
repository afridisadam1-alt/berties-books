const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

// GET register page
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

// POST registration
router.post('/register', (req, res, next) => {
    const { uname, first, last, email, password } = req.body;

    if (!password) return res.send("Password is required");

    // Hash the password correctly
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) return next(err);

        // Insert user into database
        const sql = 'INSERT INTO users (username, first_name, last_name, email, password) VALUES (?,?,?,?,?)';
        const values = [uname, first, last, email, hashedPassword];

        db.query(sql, values, (err, result) => {
            if (err) 
            return next(err);

            console.log('User registered successfully');

            // Send success message
            res.send(`
                Hello ${uname} (${first} ${last} ${email} ${password}), you are now registered!<br>
                We will send an email to you at ${email}.<br>
                Your hashed password is: ${hashedPassword}
            `);
        });
    });
});

module.exports = router;
