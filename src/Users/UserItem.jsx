import React from 'react';
import propTypes from 'prop-types';

const UserItem = (props) => {
    return (
        <div className='card text-center'>
            <img
                src={props.user.avatar_url}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
            />

            <h3>{props.user.login}</h3>

            <div>
                <a
                    href={props.user.html_url}
                    className='btn btn-dark btn-sm my-1'>
                    More
                </a>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: propTypes.object.isRequired,
};

export default UserItem;
