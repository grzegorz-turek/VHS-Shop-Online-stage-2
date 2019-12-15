import React from 'react';
import './SortingBar.scss';

class SortingBar extends React.Component {

    sortByTitleAz = e => {
        const { loadFilmsRange, initialPage, filmsPerPage } = this.props;
        e.preventDefault();
        loadFilmsRange(initialPage, filmsPerPage, 'title');
    }

    sortByTitleZa = e => {
        const { loadFilmsRange, initialPage, filmsPerPage } = this.props;
        e.preventDefault();
        loadFilmsRange(initialPage, filmsPerPage, '-title');
    }

    sortByPriceAsc = e => {
        const { loadFilmsRange, initialPage, filmsPerPage } = this.props;
        e.preventDefault();
        loadFilmsRange(initialPage, filmsPerPage, 'price');
    }

    sortByPriceDesc = e => {
        const { loadFilmsRange, initialPage, filmsPerPage } = this.props;
        e.preventDefault();
        loadFilmsRange(initialPage, filmsPerPage, '-price');
    }

    render() {

        const { sortByTitleAz, sortByTitleZa, sortByPriceAsc, sortByPriceDesc } = this;

        return (
            <div className='sortingBar'>
                <p className='sortingBar__element'>Sort by:</p>
                <p className='sortingBar__element__filter' onClick={sortByTitleAz}>Title A-Z</p>
                <p className='sortingBar__element__filter' onClick={sortByTitleZa}>Title Z-A</p>
                <p className='sortingBar__element__filter' onClick={sortByPriceAsc}>Price asc</p>
                <p className='sortingBar__element__filter' onClick={sortByPriceDesc}>Price desc</p>
            </div>
        )
    }
};

export default SortingBar;