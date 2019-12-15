import { connect } from 'react-redux';
import { getFilmsNumber } from '../../../redux/filmsRedux';
import FilmsCounter from './FilmsCounter';

const mapStateToProps = state => ({
    filmsNumber: getFilmsNumber(state)
});

export default connect(mapStateToProps)(FilmsCounter);
