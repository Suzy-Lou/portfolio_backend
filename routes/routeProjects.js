const express = require('express');
const router = express.Router();
const service = require("../services/serviceProjects.js");


router.post('/newProject', async function (req, res) {
    const titre = req.body.titre;
    const contenuBref = req.body.contenuBref;
    const contenu = req.body.contenu;
    const listeMots = req.body.listeMots;

    // const sameTitle = await service.getProjectByTitle(titre);
    // if (sameTitle) {
    //     res.status(400).send('A project with this title already exists');
    //     return;
    // }

    // const sameContentBref = await service.getProjectByBriefContent(contenuBref);
    // if (sameContentBref) {
    //     res.status(400).send('A project with this brief content already exists');
    //     return;
    // }

    // const sameContent = await service.getProjectByContent(contenu);
    // if (sameContent) {
    //     res.status(400).send('A project with this  content already exists');
    //     return;
    // }


    //service.createProjects(id,titre, contenuBref, contenu, listeMots);
    service.createProjects(titre, contenuBref, contenu, listeMots);
    console.log("projet créé");
    //afficher l'id du projects créé
    res.status(201).send();

});

router.get('/projects', async function (req, res) {
    console.log("get all projects");
    const projects = await service.getAllProjects();
    res.json(projects);

});


router.get('/projects/:id', async function (req, res) {
    //pour récupérer le projects à l'aide de son id et l'afficher comme ça 
    const id = req.params.id;

    const project = await service.getProject(id);
    if (!project) {
        res.status(404).send('Project not found');
        return;
    }
    console.log("get project by id");

    res.json(project);

});

module.exports = router;