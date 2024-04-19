const express = require('express');
const router = express.Router();
const service = require("../services/serviceProjects.js");


router.post('/newProject', async function (req, res) {
    const titre = req.body.titre;
    const contenuBref = req.body.contenuBref;
    const contenu = req.body.contenu;
    const listeMots = req.body.listeMots;
    const thumbnailImage = req.body.thumbnailImage;
    const illustrationImage = req.body.illustrationImage;


    service.createProjects(titre, contenuBref, contenu, listeMots, thumbnailImage, illustrationImage);
    console.log("projet créé");
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

router.delete('/projects/:id', async function (req, res) {
    const id = req.params.id;
    const project = await service.getProject(id);
    if (!project) {
        res.status(404).send('Project not found');
        return;
    }
    console.log("delete project");
    await service.deleteProject(id);
    res.status(204).send();
});

router.put('/projects/:id', async function (req, res) {
    const id = req.params.id;
    const titre = req.body.titre;
    const contenuBref = req.body.contenuBref;
    const contenu = req.body.contenu;
    const listeMots = req.body.listeMots;
    const thumbnailImage = req.body.thumbnailImage;
    const illustrationImage = req.body.illustrationImage;

    const project = await service.getProject(id);
    if (!project) {
        res.status(404).send('Project not found');
        return;
    }

    console.log("edit project");
    await service.editProject(id, titre, contenuBref, contenu, listeMots, thumbnailImage, illustrationImage);
    res.status(204).send();
});

module.exports = router;