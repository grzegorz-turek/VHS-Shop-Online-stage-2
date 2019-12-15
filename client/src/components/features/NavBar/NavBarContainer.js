import { connect } from 'react-redux';
import { getCartTotalPcs } from '../../../redux/filmsRedux';
import NavBar from './NavBar';

const mapStateToProps = state => ({
    cartTotalPcs: getCartTotalPcs(state)
})
export default connect(mapStateToProps)(NavBar);