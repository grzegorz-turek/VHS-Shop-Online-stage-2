import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
    <footer className='footer'>
        <div className='navbar__container'>
            <div className='footer__logo'>
                2019 All rights reserved
            </div>
            <div className='footer__links'>
                <Link to='/' className='footer__links__single'>Home</Link>
                <Link to='/faq' className='footer__links__single'>Faq</Link>
                <Link to='/rules' className='footer__links__single'>Rules</Link>
                <Link to='/contact' className='footer__links__single'>Contact</Link>
                <Link to='/cart' className='footer__links__single'>Cart</Link>
            </div>
        </div>
    </footer>
)

export default Footer;