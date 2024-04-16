const express = require('express');
const router = express.Router();
const service = require("../services/serviceProjet.js");


router.post('/newProject', async function (req, res) {
    const titre = req.body.titre;
    const contenuBref = req.body.contenuBref;
    const contenu = req.body.contenu;
    const listeMots = req.body.listeMots;


    service.createProjet(titre, contenuBref, contenu, listeMots);
    //afficher l'id du projet créé
    id = req.body.id;
    res.status(201).send(id);

});

router.get('/projet/:id', async function (req, res) {
    //pour récupérer le projet à l'aide de son id et l'afficher comme ça 
    const id = req.params.id;

    const project = await service.getProject(id);
    if (!project) {
        res.status(404).send('Project not found');
        return;
    }

    res.json(project);

});

module.exports = router;