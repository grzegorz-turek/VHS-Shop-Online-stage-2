import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

class Pagination extends React.Component {

	state = {
		presentPage: this.props.initialPage || 1
	}

	changePage = (newPage) => {
		const { onPageChange  } = this.props;
		this.setState({ presentPage: newPage });
		onPageChange(newPage);
	}

	skipToPage = increment => {
		const { changePage } = this;
		const { presentPage } = this.state;
		const targetPage = presentPage + increment;
		changePage(targetPage);
	}

	render () {
		const { pages } = this.props;
		const { presentPage } = this.state;
		const { changePage, skipToPage } = this;

   		// page - number of links per page
        // initialPage - pagination link to be active by default (e.g. 01)
        // presentPage - pagination active link number
        // newPage - pagination link number, which has been clicked on

		return (
			<div className='pagination'>
				<ul className='pagination__list'>
                    {/* pages is a number not an array so we cannot .map on it */}
                    {/* so we use Array(pages) to creaty an empty array, which number of items = pages value */}

					{presentPage >= 2 && (
						<li className='pagination__list__item' onClick={() => {skipToPage(-1)}}>
							{'<'}
						</li>
					)}

					{[...Array(pages)].map((el, page) =>
						<li
							key={++page}
							onClick={() => { changePage(page) }}
							className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
							{ page < 10 ? `0${page}` : page }
						</li>
					)}

					{presentPage !== pages && (
						<li className='pagination__list__item' onClick={() => {skipToPage(1)}}>
							{'>'}
						</li>
					)}

				</ul>
			</div>
		)
	}
}

Pagination.propTypes = {
	pages: PropTypes.number.isRequired,
	initialPage: PropTypes.number,
	onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

