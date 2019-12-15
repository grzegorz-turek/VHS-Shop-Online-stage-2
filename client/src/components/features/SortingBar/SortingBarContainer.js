import { connect } from 'react-redux';
import { getSort, loadFilmsRangeThunkRequest, } from '../../../redux/filmsRedux';
import SortingBar from './SortingBar';

const mapStateToProps = state => ({
    sortBy: getSort(state),
});

const mapDispatchToProps = dispatch => ({
    loadFilmsRange: (page, filmsPerPage, sortBy) => dispatch(loadFilmsRangeThunkRequest(page, filmsPerPage, sortBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingBar);