import React from 'react';
import './Footer.css';

import Share from './Share';
import Like from './Like';

const Footer = () => {
    return (
        <div className="footer">
            <i className="far fa-comment"></i>
            <Share />
            <Like />
            <i className="far fa-envelope"></i>
        </div>
    );
}

export default Footer;