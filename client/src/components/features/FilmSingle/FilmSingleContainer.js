import { connect } from 'react-redux';
import {
    countCartTotalCashThunkRequest,
    countCartTotalPcsThunkRequest,
    getRequest,
    getSingleFilm,
    loadSingleFilmThunkRequest,
    getAddedToCart,
    addToCartThunkRequestNew
} from '../../../redux/filmsRedux';
import FilmSingle from './FilmSingle';

const mapStateToProps = state => ({
    singleFilm: getSingleFilm(state),
    request: getRequest(state),
    cart: getAddedToCart(state)
})

const mapDispatchToProps = dispatch => ({
    loadSingleFilmInRedux: id => dispatch(loadSingleFilmThunkRequest(id)),
    addToCart: (id, cart) => dispatch(addToCartThunkRequestNew(id, cart)),
    countCartPcs: (cart) => dispatch(countCartTotalPcsThunkRequest(cart)),
    countCartCash: (cart) => dispatch(countCartTotalCashThunkRequest(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmSingle);