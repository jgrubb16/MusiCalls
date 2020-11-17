const express = require('express');

const peopleController = require('../controllers/peopleController.js');

const router = express.Router();

// router.get(
//   '/',
// //   starWarsController.getCharacters,
// //   starWarsController.getFilm,
//   (req, res) => {
//     res.status(200).json([...res.locals.characters.rows]);
//   }
// );

// router.get('/species', starWarsController.getSpecies, (req, res) =>
//   res.status(200).json(res.locals.species)
// );

// router.get('/homeworld', starWarsController.getHomeworld, (req, res) =>
//   res.status(200).json(res.locals.planet)
// );

// router.get('/film', starWarsController.getFilm, (req, res) =>
//   res.status(200).json({})
// );

// router.post('/character', starWarsController.addCharacter, (req, res) =>
//   res.status(200).json({})
// );

module.exports = router;
