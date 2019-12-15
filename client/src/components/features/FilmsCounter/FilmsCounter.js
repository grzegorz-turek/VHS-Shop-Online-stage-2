import React from 'react';
import './FilmsCounter.scss'

class FilmsCounter extends React.Component {
    render() {
        const { filmsNumber } = this.props;
        return (
            <div className='films-counter'>
                {filmsNumber} films found
            </div>
        );
    }
};

export default FilmsCounter;