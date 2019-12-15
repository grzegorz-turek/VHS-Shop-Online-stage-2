import React from 'react';
import FilmSingle from '../../features/FilmSingle/FilmSingleContainer';

const FilmPage = props => (
    <div>
        <FilmSingle id={props.match.params.id} />
    </div>
);

export default FilmPage;