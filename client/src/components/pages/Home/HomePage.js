import React from 'react';
import SortingBar from '../../features/SortingBar/SortingBarContainer';
import FilmsCounter from '../../features/FilmsCounter/FilmsCounterContainer';
import Films from '../../features/Films/FilmsContainer';

const HomePage = () => (
    <div>
        <SortingBar />
        <FilmsCounter />
        <Films />
    </div>
);

export default HomePage;