import { connect } from 'react-redux';
import { countCartTotalCashThunkRequest,
  countCartTotalPcsThunkRequest,
  addToCartThunkRequestNew,
  getAddedToCart,
  getFilms,
  getRequest,
  getPages,
  loadFilmsRangeThunkRequest,
  getPresentPage
} from '../../../redux/filmsRedux';
import Films from './Films';

const mapStateToProps = state => ({
  films: getFilms(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getPresentPage(state),
  cart: getAddedToCart(state)
})

const mapDispatchToProps = dispatch => ({
  loadFilmsRange: (page, filmsPerPage) => dispatch(loadFilmsRangeThunkRequest(page, filmsPerPage)),
  addToCart: (id, cart) => dispatch(addToCartThunkRequestNew(id, cart)),
  countCartPcs: (cart) => dispatch(countCartTotalPcsThunkRequest(cart)),
  countCartCash: (cart) => dispatch(countCartTotalCashThunkRequest(cart))
});

export default connect(mapStateToProps, mapDispatchToProps)(Films);