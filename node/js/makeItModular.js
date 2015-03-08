var fs = require('fs');

module.exports = function(dir,ext,callback){

    var filelist = new Array();
    var i = 0;

    fs.readdir(dir, function doneReading(err, fileContents) {
        if(err){
            return callback(err);
        }
        else
        fileContents.forEach(function(file){
            if(file.indexOf('.'+ext) > -1){
                filelist[i]=file;
                i += 1;
            }
        })

        return callback(null,filelist);
    })

}


