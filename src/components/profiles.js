import React from 'react';
import { Link, Redirect } from 'react-router-dom';


import Card from '../hoc/card';
import Auth from '../hoc/auth';

//Shortcut for fat arrow function :p
const redi = () => <Redirect to="/" />

//Or we can just use 
// props.history.push('/') => This is pure js. 

const Profile = (props) => {
    return (
        //Profile saysafasından posts sayfasına geçiş => /profile/posts
        <Auth>
            <Card>
                <Link to={{
                    pathname: `${props.match.url}/posts` 
                    }}>
                    take me to /profile/posts </Link>
            </Card>
        </Auth>
    )
}

export default Profile;