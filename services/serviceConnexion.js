const user = require('../routes/routeConnexion.js')
const userModel = require('../models/modelUser.js')

const bcrypt = require('bcrypt')


exports.getUser = async function(email, password){

    let findUser = await userModel.findOne({ "email": email }).then((result) => {
      return result;
      
    });
    if(!findUser){
        return null;
    }

    //let salt = findUser.sel;
    let password2 = findUser.psw;
   
    // let password3 = await bcrypt.hash(password, salt);
    let password3 = password2;

    if(password2 == password3){
        console.log('correct password');
        return findUser;
    }
    else{
        console.log('incorrect password');
        return null;
    }
  }

  exports.searchUser = async function(email) {
    let existingUser = await userModel.findOne({ "email": email });
    return existingUser;
  }

exports.createUser = async function(nom,psw,email,){
    let existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
        console.log("Un utilisateur avec la même adresse mail existe déjà");
        return null;
    }

    //let sel = await bcrypt.genSalt(10);
    //let pswcrypt = await bcrypt.hash(psw,sel);
    let pswcrypt = psw;
    const newUser = new userModel({
        nom: nom,
        //sel:sel,
        psw: pswcrypt,
        email: email,
    });
    newUser.save().then(() => console.log("user created"));
}