import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../..//common/Button/Button';
import { Link } from 'react-router-dom';
import './FilmSummary.scss';

const FilmSummary = (props) => (
    <article className='film-summary'>
        <div className='film-summary__title'>
            <h2>{props.film.title}</h2>
        </div>
        <div className='film-summary__content'>
            <div className='film-summary__content__poster'>
                <img src={props.film.posterUrl} alt={`${props.film.title} movie poster`} />
            </div>
            <div className='film-summary__content__details'>
                <p>Genere: {props.film.type}</p>
                <p>Year: {props.film.year}</p>
                <p>Stars: {props.film.stars}</p>
                <p>Price: {props.film.price} PLN</p>
            </div>
        </div>
        <div className='film-summary__buttons'>
            <Button variant='primary' onClick={() => props.addToCartHandleClick(props.film.id, props.cart)}>Add to cart</Button>
            <Link to={`/films/${props.film.id}`}><Button variant='primary'>Read more</Button></Link>
        </div>
    </article>
)

FilmSummary.propTypes = {
    film: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
    addToCartHandleClick: PropTypes.func.isRequired
};

export default FilmSummary;