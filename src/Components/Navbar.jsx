import React from 'react';
import propTypes, { number } from 'prop-types';

function Navbar(props) {
    const defaultProps = {
        title: 'Github Finder',
        icon: 'fa-brands fa-github',
    };
    return (
        <nav className='navbar bg-primary'>
            <i className={props.icon || defaultProps.icon}>
                {' '}
                {props.title || defaultProps.title}
                {''}
                {''}
            </i>
        </nav>
    );
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
};

export default Navbar;
