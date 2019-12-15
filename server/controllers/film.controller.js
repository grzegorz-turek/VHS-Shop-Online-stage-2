const Film = require('../models/film.model');

// get all films
exports.getFilms = async function (req, res) {

    try {
        res.status(200).json(await Film.find());

    } catch(err) {
        res.status(500).json(err);
    }
};

// get one film by id
exports.getSingleFilm = async function (req, res) {

    try {
        res.status(200).json(await Film.findOne( {id: req.params.id} ));

    } catch(err) {
        res.status(500).json(err);
    }
};

// get unsorted or sorted films by range
exports.getFilmsByRange = async function (req, res) {
    try {
        let { startAt, limit, sortBy } = req.params;
    
        startAt = parseInt(startAt);
        limit = parseInt(limit);

        const films = await Film.find().sort(sortBy).skip(startAt).limit(limit);
        const amount = await Film.countDocuments();
    
        res.status(200).json({
            films,
            amount,
        });
    
    } catch(err) {
        res.status(500).json(err);
    }
};

exports.addToCart = async function (req, res) {

    try {
        res.status(200).json(await Film.findOne( {id: req.params.id} ));

    } catch(err) {
        res.status(500).json(err);
    }
};