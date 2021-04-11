import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/lifecycles';
import Conditional from './components/conditional';
import User from './components/user';
//myawesomeapp.com/posts


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink><br />
          <NavLink to="/posts">Posts</NavLink><br />
          <NavLink to={{ pathname: '/profile' }}>Profile</NavLink><br />
          <NavLink to="/life">Life Cycles</NavLink><br />
          <NavLink to="/conditional">Conditional</NavLink><br />
          <NavLink to="/user">User -HOC</NavLink><br />
          <hr />

        </header>

        <Switch>

          <Route path="/posts/:id/:username?" component={PostItem} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/life" component={Life}/>
          <Route path="/conditional" component={Conditional}/>
          <Route path="/user" component={User}/>
          <Route path="/" exact component={Home} />
          <Route render={()=> <h3>Oops 404</h3>} />
        </Switch>


      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)