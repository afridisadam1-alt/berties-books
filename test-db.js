const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'berties_books_app',
    password: 'qwertyuiop',
    database: 'berties_books',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

db.query("SELECT 1 + 1 AS test", (err, results) => {
    if (err) {
        console.error("DB connection failed:", err);
    } else {
        console.log("DB connected! Test query result:", results[0].test);
    }
    process.exit();
});
