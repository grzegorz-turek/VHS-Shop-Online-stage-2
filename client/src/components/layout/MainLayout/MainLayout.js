import React from 'react';
import NavBar from '../../features/NavBar/NavBarContainer';
//import Footer from '../../features/Footer/Footer';
import PageContainer from '../PageContainer/PageContainer';
import './MainLayout.scss';

const MainLayout = ( {children} ) => (
    <div className='main-layout'>
        <NavBar />
        <PageContainer>
            {children}
        </PageContainer>
        {/*<Footer />*/}
    </div>
);

export default MainLayout;