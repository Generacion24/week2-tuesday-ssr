const express = require('express');
const router = express.Router();
const projectApp = require('../projects.json')

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/about-us', (req, res) => {
    res.send('Acerca de nuestra compañia')
})

router.get('/team', (req, res) => {
    return res.send("Este es nuestro equipo! 💥");
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params
    return res.send(`${name} es parte del equipo 💥`)
})


router.get('/about-me', (req, res) => {
    return res.render('about-me')
})

router.get('/projects', (req, res) => {
    //console.log(projectApp)
    res.render('projects', { projectApp })
})

router.get('/project/:id', (req, res) => {
    const { id } = req.params
    const project = projectApp.find((project) => project.id == id)
    console.log(project)
    res.render('project-id', { project })
})



module.exports = router;
