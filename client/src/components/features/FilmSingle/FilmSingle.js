import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import FilmSingleSummary from '../FilmSingleSummary/FilmSingleSummary';

class FilmSingle extends React.Component {

    componentDidMount() {
        this.props.loadSingleFilmInRedux(this.props.id);
    }

    addToCartHandleClick = async( id, cart ) => {
        await this.props.addToCart( id, cart );
        this.props.countCartPcs(this.props.cart);
        this.props.countCartCash(this.props.cart);
    }

    render() {

        const { singleFilm, request } = this.props;

        if (!request.pending && request.success && singleFilm) {
            return (
                <article className='film-single'>
                    <FilmSingleSummary singleFilm={this.props.singleFilm} cart={this.props.cart} addToCartHandleClick={this.addToCartHandleClick} />
                </article>
            )
        }
        
        if(request.pending || request.success === null) {
            return (
                <div>
                    <Spinner />
                </div>
            )
        }

        if (!request.pending && request.error !== null) {
            return (
                <div>
                    <Alert variant='error'>{request.error}</Alert>
                </div>
            )
        }

        if (!request.pending && request.success && singleFilm === null ) {
            return (
                <div>
                    <Alert variant='info'>No film</Alert>
                </div>
            )
        }
    }
};

FilmSingle.propTypes = {
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
    cart: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    loadSingleFilmInRedux: PropTypes.func.isRequired,
};

export default FilmSingle;