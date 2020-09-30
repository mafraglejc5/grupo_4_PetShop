const path = require('path');
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'))
const dbUsers = require(path.join(__dirname,'..','data', 'dbUsers'));
const fs = require('fs');

module.exports = {
    index: function (req, res) {
        res.render('index', {
            title: "index",
            css: "index.css",
            productos: dbProducts
        })
    },

}