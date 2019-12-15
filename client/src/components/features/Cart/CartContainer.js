import { connect } from 'react-redux';
import {
    countCartTotalCashThunkRequest,
    countCartTotalPcsThunkRequest,
    removeFromCartThunkRequestNew,
    addToCartThunkRequestNew,
    getAddedToCart,
    removeProductFromCartThunkRequestNew,
    getCartTotalCash,
    getCartTotalDiscount,
    discountSubmitThunkRequest,
    getCartTotalDiscountPhrase,
    getRequest
} from '../../../redux/filmsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
    cart: getAddedToCart(state),
    cartTotalCash: getCartTotalCash(state),
    cartTotalDiscount: getCartTotalDiscount(state),
    discountsDB: getCartTotalDiscountPhrase(state),
    request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
    addToCart: (id, cart) => dispatch(addToCartThunkRequestNew(id, cart)),
    removeFromCart: (id, cart) => dispatch(removeFromCartThunkRequestNew(id, cart)),
    removeProductFromCart: (id, cart) => dispatch(removeProductFromCartThunkRequestNew(id, cart)),
    countCartPcs: (cart) => dispatch(countCartTotalPcsThunkRequest(cart)),
    countCartCash: (cart) => dispatch(countCartTotalCashThunkRequest(cart)),
    discountSubmit: (phrase, db) => dispatch(discountSubmitThunkRequest(phrase, db))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);