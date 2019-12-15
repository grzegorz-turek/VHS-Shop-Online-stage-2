import React from 'react';
import { PropTypes } from 'prop-types';
import FilmsList from '../FilmsList/FilmsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Films extends React.Component {

    componentDidMount() {
        const { loadFilmsRange, filmsPerPage, initialPage } = this.props;
        loadFilmsRange(initialPage || 1, filmsPerPage);
    }

    loadFilmsPage = (page) => {
        const { loadFilmsRange, filmsPerPage } = this.props;
        loadFilmsRange(page, filmsPerPage);
    }

    addToCartHandleClick = async( id, cart ) => {
        await this.props.addToCart( id, cart );
        this.props.countCartPcs(this.props.cart);
        this.props.countCartCash(this.props.cart);
    }

    render() {
        const { films, request, pages, presentPage, cart } = this.props;
        const { loadFilmsPage } = this;

        if (!request.pending && request.success && films.length > 0) {
            return (
                <div>
                    <FilmsList films={films} addToCartHandleClick={this.addToCartHandleClick} cart={cart} />
                    {<Pagination pages={pages} initialPage={presentPage} onPageChange={loadFilmsPage} />}
                </div>
            )
        }

        if (request.pending || request.success === null) {
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
        
        if(!request.pending && request.success && films.length === 0) {
            return (
                <div>
                    <Alert variant='info'>No films</Alert>
                </div>
            )
        }
    }
};

Films.propTypes = {
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
    loadFilmsRange: PropTypes.func.isRequired
};

export default Films;