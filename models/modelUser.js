const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    sel : String,
    psw : String,

}); 

const connexion = mongoose.model('connexion', userSchema);
module.exports = connexion;
