
/*
 * GET artistscreen
 */

var data = require('../data.json');

exports.view = function(req, res){
    res.render('artistscreen', {});
};

exports.viewName = function(req, res){
    var name = req.params.name;
    console.log("Artist name: " + name);
    
    var artist;

    for(var i = 0; i < data.length; i++) {
        var obj = data[i];

        if(obj.name == name) {
            artist = obj;
            console.log(artist);
        }
    }

    res.render('artistscreen', {});
};
