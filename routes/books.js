// Create a new router
const express = require("express")
const router = express.Router()

router.get('/search',function(req, res, next){
    res.render("search.ejs")
});

router.get('/search-result', function (req, res, next) {
    //searching in the database
    res.send("You searched for: " + req.query.keyword)
});
// List route
router.get('/list', function (req, res, next) {
    let sqlquery = "SELECT * FROM books";

    db.query(sqlquery, (err, result) => {
        if (err) {
            console.error("Database error:", err);
            next(err);
        } else {
            console.log("Query result:", result); // 👈 Add this line
            res.render('list', { availableBooks: result });
        }
    });
});


// Export the router object so index.js can access it
module.exports = router
