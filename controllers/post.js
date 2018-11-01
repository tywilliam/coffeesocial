const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');
let Grid = require("gridfs-stream");
let conn = mongoose.connection;
Grid.mongo = mongoose.mongo;
let gfs;

conn.once("open", () => {
    gfs = Grid(conn.db);
    exports.upload = (req, res, next) => {
        res.render('home', {
            title: 'Ok'
        });
    }
}