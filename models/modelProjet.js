const mongoose = require('mongoose');

const projetSchema = new mongoose.Schema({
    titre: {type:String,required:true},
    contenuBref: {type:String,required:true,unique:true},
    contenu: {type:String,required:true,unique:true},
    listeMots: {type:Array,required:true},

}); 

const projet = mongoose.model('projet', projetSchema);
module.exports = projet;
