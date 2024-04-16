const user = require('../routes/routeProjects.js')
const userModel = require('../models/modelProjects.js')

exports.createProjects = async function(id,titre, contenuBref, contenu, listeMots){
    const newProjects = new userModel({
        titre: titre,
        contenuBref: contenuBref,
        contenu: contenu,
        listeMots: listeMots,
        id:id
    });

    //ajouter la vérification (contenu bref = 80 caractères max, contenu = 250 mots max et listeMots = 10 mots max)

    newProjects.save().then(() => console.log("project created"));
}

exports.getProject = async function(id) {
    const project = await userModel.findById(id);
    return project;
    //récupérer les id des projectss pour pouvoir les afficher grace à l'id

}

exports.getAllProjects = async function() {
    const projects = await userModel.find();
    return projects;
}