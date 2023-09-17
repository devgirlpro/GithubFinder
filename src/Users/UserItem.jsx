import React, { useState } from 'react';

function UserItem() {
    const usersInfo = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
    };

    //const [] = useState();
    return (
        <div className='card text-center'>
            <img
                src={usersInfo.avatar_url}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
            />
            <h3>{usersInfo.login}</h3>
            <div>
                <a href={usersInfo.html_url} className='btn btn-dark btn-sm my-1' >More</a>
            </div>
        </div>
    );
}

export default UserItem;
