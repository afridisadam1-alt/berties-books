// Create a new router
const express = require("express")
const router = express.Router()

// Handle our routes
router.get('/',function(req, res, next){
    res.render('index.ejs')
});

router.get('/list',function(req, res, next){
    res.render('list.ejs')
});
router.get('/about',function(req, res, next){
    res.render('about.ejs')
});
router.get('/list',function(req, res, next){
    res.render('list.ejs')
});
router.get('/addbook',function(req, res, next){
    res.render('addbook.ejs')
});
router.get('/register',function(req, res, next){
    res.render('register.ejs')
});
router.post('/addbook', function (req, res, next) {
    // saving data in database
    let sqlquery = "INSERT INTO books (name, price) VALUES (?,?)"
    // execute sql query
    let newrecord = [req.body.first, req.body.price]
    db.query(sqlquery, newrecord, (err, result) => {
        if (err) {
            next(err)
        }
        else
            res.send(' This book is added to database, name: '+ req.body.first + ' price '+ req.body.price)
        console.log("Data regestered success");
    })
}) 

// Export the router object so index.js can access it
module.exports = router