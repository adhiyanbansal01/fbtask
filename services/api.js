let mysqlConnection = require('../config/connection');
const bcrypt = require('bcryptjs');
const { changeUser } = require('../config/connection');
const router = require('../routes/routes');

exports.getPosts = getPosts;
function getPosts(req, res) {
    var keyword = req.query.keyword;
    var query = "select * from post where status = 1"
    if (keyword) {
        query += ` and post LIKE '%${keyword}%'`
    }
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err)
            return res.status(200).json(rows);
        else    
        res.send(err);
    })
}


exports.addpost = addpost
function addpost(req, res) {
    var background = req.body.background;
    var post = req.body.post;

    msqlConnection.query("INSERT into post(post,background) values(?,?)", [post, background], function (err, rows, fields) {
        if (!err)
            return res.status(200).json({ message: "Post added successfully" });
        else
            console.log(err)
        res.status(400).json({ error: "bad_request", error_description: "Not updated" })
    });
}

exports.editpost = editpost
function editpost(req, res) {
    var id = req.params.id;
    mysqlConnection.query('select * from post where id = ?', [id], function (err, rows, fields) {
        if (!err)
            return res.status(200).json(rows[0]);
        else
            console.log(err)
        res.status(400).json({ message: "Error Occured" });
    });
}

exports.deletepost = deletepost
function deletepost(req, res) {
    let id = req.params.id;
    mysqlConnection.query(` delete from post where id=?`, [id], function (err, rows, fields) {
        if (!err)
            return res.status(200).json({ message: "Deleted Successfully" });
        else
            res.status(400).json({ message: "Error Occured" });
    })
}














