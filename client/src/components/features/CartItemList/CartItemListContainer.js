import { connect } from 'react-redux';
import { getAddedToCart } from '../../../redux/filmsRedux';
import CartItemList from './CartItemList';

const mapStateToProps = state => ({
    cart: getAddedToCart(state)
})

export default connect(mapStateToProps)(CartItemList);