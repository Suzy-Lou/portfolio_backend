const user = require('../routes/routeProjet.js')
const userModel = require('../models/modelProjet.js')

exports.createProjet = async function(titre, contenuBref, contenu, listeMots){
    const newProjet = new userModel({
        titre: titre,
        contenuBref: contenuBref,
        contenu: contenu,
        listeMots: listeMots,
    });

    //ajouter la vérification (contenu bref = 80 caractères max, contenu = 250 mots max et listeMots = 10 mots max)

    newProjet.save().then(() => console.log("project created"));
}

exports.getProject = async function(id) {
    const project = await userModel.findById(id);
    return project;
    //récupérer les id des projets pour pouvoir les afficher grace à l'id

}