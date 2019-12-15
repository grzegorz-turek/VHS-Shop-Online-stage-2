import React from 'react';
import FilmSummary from '../FilmSummary/FilmSummary';
import { PropTypes } from 'prop-types';
import './FilmsList.scss';

const FilmsList = (props) => (
    <div>
        <section className='films-list'>
            {props.films.map(film => <FilmSummary key={film.id} film={film} addToCartHandleClick={props.addToCartHandleClick} cart={props.cart}/>)}
        </section>
    </div>
)

FilmsList.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            titlePolish: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            director: PropTypes.string.isRequired,
            stars: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            posterUrl: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            cartAmount: PropTypes.number.isRequired
        })
    ),
};

export default FilmsList;