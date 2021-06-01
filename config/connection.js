var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({


    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    charset:process.env.DB_CHARSET
})

mysqlConnection.connect((err) => {

    if (!err)
       return console.log("Database connection successfull");

    else
        console.log("Database connection failed");
})

module.exports=mysqlConnection