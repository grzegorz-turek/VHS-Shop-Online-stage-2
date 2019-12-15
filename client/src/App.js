import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/pages/Home/HomePage';
import FilmPage from './components/pages/Film/FilmPage';
import CartPage from './components/pages/Cart/CartPage';
import ContactPage from './components/pages/Contact/ContactPage';
import FaqPage from './components/pages/Faq/FaqPage.js';
import RulesPage from './components/pages/Rules/RulesPage';
import NotFoundPage from './components/pages/NotFound/NotFoundPage';

const App = props => (
    <div>
        <MainLayout>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/films/:id' exact component={FilmPage} props={props}/>
                <Route path='/cart' exact component={CartPage} />
                <Route path='/contact' exact component={ContactPage} />
                <Route path='/faq' exact component={FaqPage} />
                <Route path='/rules' exact component={RulesPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </MainLayout>
    </div>
);

export default App;