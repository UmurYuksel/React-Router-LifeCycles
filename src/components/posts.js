import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Posts = () => {
   
    const ids = [
        {id:'1',name:'post 1'},
        {id:'2',name:'post 2'},
        {id:'3',name:'post 3'}

    ]
   
    //this was in react 15, but in react 16 we can return the array directly such as below 

   
    // return ids.map(item => {
    //     return (
    //         <span key={item.id}>
    //             <Link to={item.id}>{item.name}</Link>
    //         </span>
    //     )
    // })



    // return ['Hello','This','is an','array']

    return [
        <div key="1">Hello</div>,
        <div key="2">To My Array</div>
    ]


}

export default Posts;