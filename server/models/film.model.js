const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Film = new Schema({
    id: { type: 'String', required: true },
    title: { type: 'String', required: true },
    titlePolish: { type: 'String' },
    type: { type: 'String' },
    year: { type: 'Number' },
    director: { type: 'String' },
    stars: { type: 'String' },
    description: { type: 'String' },
    posterUrl: { type: 'String', required: true },
    price: { type: 'Number', required: true },
    cartAmount: { type: 'Number', required: true }
});

module.exports = mongoose.model('Film', Film);