const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
    titre: {type:String,required:true},
    contenuBref: {type:String,required:true},
    contenu: {type:String,required:true},
    listeMots: {type:Array,required:true},

}); 

const projects = mongoose.model('projects', projectsSchema);
module.exports = projects;
