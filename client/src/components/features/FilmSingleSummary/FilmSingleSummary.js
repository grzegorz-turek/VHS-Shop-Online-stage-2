import React from 'react';
import Button from '../..//common/Button/Button';
import './FilmSingleSummary.scss'

const FilmSingleSummary = (props) => (
    <article className='film-single'>
        <div className='film-single__poster'>
            <img src={props.singleFilm.posterUrl} alt={`${props.singleFilm.title} movie poster`} />
        </div>
        <div className='film-single__content'>
            <div className='film-single__content__details'>
                <h1>{props.singleFilm.title}</h1>
                {/*<p>Polish title: {props.singleFilm.titlePolish}</p>*/}
                <p>Type: {props.singleFilm.type}</p>
                <p>Year: {props.singleFilm.year}</p>
                <p>Director: {props.singleFilm.director}</p>
                <p>Stars: {props.singleFilm.stars}</p>
                <p>Description: {props.singleFilm.description}</p>
                <p>Price: {props.singleFilm.price} PLN</p>
            </div>
            <div className='film-single__content__buttons'>
                <Button variant='primary' onClick={() => props.addToCartHandleClick(props.singleFilm.id, props.cart)}>Add to cart</Button>
            </div>
        </div>
    </article>
)

export default FilmSingleSummary;