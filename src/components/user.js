import React from 'react';

import userHoc from '../hoc/userHoc';

const User = (props) => {
    return (
        <div>
            User 1 5
        </div>
    )
}

const User2 = (props) => {
    return (
        <div>
            User 2
        </div>
    )
}


export default userHoc(User, User2, 'Hello');