// Create a new router
const express = require("express")
const router = express.Router()

router.get('/search',function(req, res, next){
    res.render("search.ejs")
});

router.get('/search_result', function (req, res, next) {
    const searchText = req.query.search_text;   // from search.ejs

    const sql = "SELECT * FROM users WHERE uname LIKE ?";

    db.query(sql, [ searchText + '%' ], function (err, results) {
        if (err) throw err;

        console.log("Search Text:", searchText);
        console.log("Query Results:", results);   // <-- prints results in console

        res.render("search.ejs", { users: results });
    });
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
