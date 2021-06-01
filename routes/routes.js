var express = require('express');
var router = express.Router();
const services = require("../services/api")
router.get('/posts', services.getPosts)
router.post('/post', services.addpost)
router.get('/post/:id', services.editpost)
router.delete('/post/delete/:id', services.deletepost)
module.exports = router;


