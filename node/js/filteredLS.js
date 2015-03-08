var modular = require('./makeItModular.js')
var directory = process.argv[2];
var ext = process.argv[3];

modular(directory,ext,function(err,list){

    if(err){
        throw err;
    }
    else
    list.forEach(function(file){
        console.log(file);
    })
});