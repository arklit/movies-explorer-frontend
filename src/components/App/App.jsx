import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
function App() {
  return (
    <div className="app__page">
      <Switch>
        <Route exact path="/">
          <Header/>
          <Main/>
          <Footer/>
        </Route>
        <Route path="/movies">
          <Header/>
          <Movies/>
          <Footer/>
        </Route>
        <Route path="/saved-movies">
          <Header/>
          <SavedMovies/>
          <Footer/>
        </Route>
        <Route path="/profile">
          <Header/>
          <Profile/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
          <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
