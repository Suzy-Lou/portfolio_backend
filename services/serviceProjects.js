const user = require('../routes/routeProjects.js')
const userModel = require('../models/modelProjects.js')

exports.createProjects = async function(titre, contenuBref, contenu, listeMots, thumbnailImage, illustrationImage){
    const newProjects = new userModel({
        titre: titre,
        contenuBref: contenuBref,
        contenu: contenu,
        listeMots: listeMots,
        thumbnailImage: thumbnailImage,
        illustrationImage: illustrationImage,
    });

    //ajouter la vérification (contenu bref = 80 caractères max, contenu = 250 mots max et listeMots = 10 mots max)

    newProjects.save().then(() => console.log("project created"));
}

exports.getProject = async function(id) {
    const project = await userModel.findById(id);
    return project;
}

exports.getAllProjects = async function() {
    const projects = await userModel.find();
    return projects;
}

exports.getProjectByTitle = async function(titre) {
    const project = await userModel.findOne({ titre: titre });
    return project;
}

exports.getProjectByContent = async function(contenu) {
    const project = await userModel.findOne({ contenu: contenu });
    return project;
}

exports.getProjectByBriefContent = async function(contenuBref) {
    const project = await userModel.findOne({ contenuBref: contenuBref });
    return project;
}

exports.deleteProject = async function(id) {
    await userModel.findByIdAndDelete(id);
}
exports.editProject = async function(id, titre, contenuBref, contenu, listeMots, thumbnailImage, illustrationImage){
    try {
        const updatedProject = await userModel.findByIdAndUpdate(id, {
            titre: titre,
            contenuBref: contenuBref,
            contenu: contenu,
            listeMots: listeMots,
            thumbnailImage: thumbnailImage,
            illustrationImage: illustrationImage,

        }, { new: true }); 

        //ajouter la vérification (contenu bref = 80 caractères max, contenu = 250 mots max et listeMots = 10 mots max)

        if (!updatedProject) {
            console.log("No project found with this id");
            return null;
        }

        console.log("project updated");
        return updatedProject;
    } catch (error) {
        console.error('An error occurred while updating the project:', error);
        throw error;
    }
}