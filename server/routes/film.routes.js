// file incudes routes connected to films collection only, routes linked to other collections should be placed in other *.routes.js files
// file includes endpoints list together with functions to be fired while using them

const express = require('express');

// needed to use router, which is a part of express
const router = express.Router();

// we load all functions from film.controller
const FilmController = require('../controllers/film.controller');

// get all films
router.route('/films').get(FilmController.getFilms);

// get one film by id
router.route('/films/:id').get(FilmController.getSingleFilm);

// get films by range
//router.route('/films/range/:startAt/:limit').get(FilmController.getFilmsByRange);
router.route('/films/range/:startAt/:limit/:sortBy').get(FilmController.getFilmsByRange);

// add one film to cart
router.route('/films/:id').get(FilmController.addToCart);


module.exports = router;