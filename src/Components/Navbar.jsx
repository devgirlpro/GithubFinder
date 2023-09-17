import React from 'react';
import propTypes from 'prop-types';

const Navbar = (props) => {
    const defaultProps = {
        title: 'Github Finder',
        icon: 'fa-brands fa-github',
    };
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={props.icon || defaultProps.icon} />
                {props.title || defaultProps.title}
            </h1>
        </nav>
    );
};

Navbar.propTypes = {
    title: propTypes.string,
    icon: propTypes.string,
};

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
};

export default Navbar;
