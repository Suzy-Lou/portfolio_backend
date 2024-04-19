const express = require('express');
const router = express.Router();
const service = require("../services/serviceConnexion.js");
const auth = require("../auth.js");



router.post('/login', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    //decrypter le mot de passe avec son sel

    const user = await service.getUser(email, password);
    if (!user){
        res.status(401).send('invalid credentials');
        return ;
    }
    const accessToken = auth.generateAccessToken(email);
    res.json({
        accessToken,
    });

    console.log("get login request from front");
    res.status(201).send();


});




router.post('/nouvelUtilisateur', async function (req, res) {
    const nom = req.body.nom;
    const mdp = req.body.mdp;
    const email = req.body.email;

    if (service.searchUser(email)=="null"){
        res.status(400).send('un utilisateur avec la meme adresse mail existe déjà');
        return ;
    }
    else{
        service.createUser(nom, mdp, email);
    }
    res.status(201).send();
});


module.exports = router;