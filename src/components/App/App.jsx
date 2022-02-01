import React  from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import * as auth from '../../utils/Auth'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import api from '../../utils/MainApi';
import { getFilms } from '../../utils/MoviesApi';
import searchMovies from '../../utils/searchMovies';
import { shortDuration} from '../../utils/constants'
function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({name: '', email: ''})
  const history = useHistory();
  const location = useLocation();
  const [isRegisterError, setIsRegisterError] = React.useState('');
  const [isFormSent, setIsFormSent] = React.useState(false);
  const [isLoginError, setIsLoginError] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [isSearchLoading, setIsSearchLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isOnlyCheckedSearch, setIsOnlyCheckedSearch] = React.useState(false);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [savedMoviesId, setSavedMoviesId] = React.useState([]);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [searchFormStorage, setSearchFormStorage] = React.useState(
    localStorage.getItem("search")
        ? JSON.parse(localStorage.getItem("search"))
        : ''
);
  const [checked, setChecked] = React.useState(
    localStorage.getItem("checked")
    ? JSON.parse(localStorage.getItem("checked"))
    : false
  )
  const [savedKeyWord, setSavedKeyWord] = React.useState('');
  const [isShortSavedFilmChecked, setIsShortSavedFilmChecked] = React.useState(false);
  const [movies, setMovies] = React.useState(
    localStorage.getItem("foundMovies")
      ? JSON.parse(localStorage.getItem("foundMovies"))
      : []
  );

  React.useEffect(() => {
    if (loggedIn) {
      api.getMovies()
        .then((moviesData) => {
          setSavedMovies(moviesData);
          setSavedMoviesId(moviesData.map((movie) => movie.movieId));
        })
        .catch((e) => console.log(e));
    }
  }, [loggedIn]);

  const handleSearchSavedMovies = (searchValue) => {
    setIsOnlyCheckedSearch(false);
    if (!searchValue) {
      setIsOnlyCheckedSearch(true);
    }
    setSavedKeyWord(searchValue);
    const movies = searchMovies(
      savedMovies,
      searchValue,
      isShortSavedFilmChecked
    );
    setFoundSavedMovies(movies);
  };

  React.useEffect(() => {
    if (savedKeyWord) {
      handleSearchSavedMovies(savedKeyWord);
    }
  }, [savedMovies]);

  React.useEffect(() => {
    if (savedMovies.length || foundSavedMovies.length) {
      handleSearchSavedMovies(savedKeyWord);
    }
  }, [isShortSavedFilmChecked]);

  const handleSearchMoviesChecked = () => {
    const cards = JSON.parse(localStorage.getItem("foundMovies"));
    localStorage.setItem("checked", JSON.stringify(checked))
    const shortCards = cards.filter((movie) => {
      if (checked) {
        if (movie.duration < shortDuration) {
          return true;
        }
      } else if (movie.duration >= shortDuration) {
        return true;
      }
    });
    setMovies(shortCards);
    setIsNotFound(!shortCards.length);
  };
  React.useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      handleSearchMoviesChecked();
    }
  }, [checked]);

  const handleSearchMovies = async (searchValue) => {
    setIsNotFound(false);
    setIsSearchLoading(true);
    localStorage.removeItem("search");
    try {
      let movies = JSON.parse(localStorage.getItem("movies"));
      if (!movies) {
        const films = await getFilms();
        localStorage.setItem("movies", JSON.stringify(films));
        movies = JSON.parse(localStorage.getItem("movies"));
      }
      const cards = searchMovies(movies, searchValue);
      localStorage.setItem("foundMovies", JSON.stringify(cards));
      localStorage.setItem("search", JSON.stringify(searchValue));
      setSearchFormStorage(searchValue)
      handleSearchMoviesChecked();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearchLoading(false)
    }
  };

  function handleSaveMovie(movie)  {
    api.saveMovie(movie)
      .then((res) => {
        setSavedMoviesId([...savedMoviesId, movie.id]);
        setSavedMovies([...savedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = (movie) => {
    let movieId = savedMovies.filter(
      (f) => f.movieId === movie.id || f.data?.movieId === movie.id
    )[0];
    if (movieId) {
      movieId = movieId._id || movieId._id;
    }
    api.deleteMovie(movie.owner ? movie._id : movieId)
      .then((deleted) => {
        setSavedMovies(savedMovies.filter((film) => film._id !== deleted._id));
        setSavedMoviesId(savedMoviesId.filter((id) => id !== deleted.movieId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function onRegister( name, email, password) {
    auth.register(name, email, password)
      .then(() => {
        onLogin(email, password)
      })
      .catch((err) => { 
      console.log(err);
      setIsRegisterError(err);
      })
      .finally(() => {
        setIsFormSent(false);
      })
  }
  function onLogin(email, password) {
    auth.authorize(email, password)
      .then(() => {
        tokenCheck()
      })
      .catch((err) => {
        console.log(err)
        setIsLoginError(err)
      })
      .finally(() => {
        setIsFormSent(false)
      })
  }
  function tokenCheck() {
    api.getUserInfo()
      .then((res) => {
        if(res) {
          setCurrentUser({
            name: res.name,
            email: res.email,
            _id: res._id
          });
        }
        setLoggedIn(true)
        if (location.pathname === '/signin' || location.pathname === '/signup') {
          history.push('/movies');
        } else {
          history.push(location.pathname);
        }
      })
      .catch(err => console.log(err))
  }
  function onSignOut() {
    auth.signOut()
    .then(() => {
      setLoggedIn(false)
      setCurrentUser({ email: '', name: ''})
      setMovies([])
      localStorage.removeItem("movies")
      localStorage.removeItem("foundMovies")
      localStorage.removeItem("checked")
      localStorage.removeItem("search")
      history.push('/')
    })
    .catch(err => console.log(err))
  }
  React.useEffect(() => {
    tokenCheck()
  }, []);

  function handleEditProfile(name,email) {
    api.updateUser(name, email)
    .then((res) => {
      setCurrentUser({
        name: res.name,
        email: res.email
      })
      setIsSuccess(true);
    })
    .catch(err => console.log(`При обновлении профиля произошла ошибка: ${err}`))
  }

  return (
   <CurrentUserContext.Provider value={currentUser}>
    <div className="app__page">
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn}/>
          <Main/>
          <Footer/>
        </Route>
        <ProtectedRoute path="/movies" loggedIn={loggedIn}>
          <Header/>
          <Movies
            movies={movies}
            savedMoviesId={savedMoviesId}
            isNotFound={isNotFound}
            handleSubmit={handleSearchMovies}
            handleSaveMovie={handleSaveMovie}
            deleteMovie={deleteMovie}
            isLoading={isSearchLoading}
            handleChangeRadio={setChecked}
            checked={checked}
            searchFormStorage={searchFormStorage}/>
          <Footer/>
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
          <Header/>
          <SavedMovies
          movies={
            savedKeyWord || isOnlyCheckedSearch
              ? foundSavedMovies?.length
                ? foundSavedMovies
                : 'NotFound'
              : savedMovies
          }
          deleteMovie={deleteMovie}
          handleSubmit={handleSearchSavedMovies}
          handleChangeRadio={setIsShortSavedFilmChecked}
            />
          <Footer/>
        </ProtectedRoute>
        <ProtectedRoute path="/profile" loggedIn={loggedIn}>
          <Header/>
          <Profile 
          handleSignOut={onSignOut}
          onEditProfile={handleEditProfile}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}/>
        </ProtectedRoute>
        <Route path="/signup">
          <Register
          onRegister={onRegister}
          isError={isRegisterError}
          setError={setIsRegisterError}
          isFormSent={isFormSent}
          setIsFormSent={setIsFormSent}/>
        </Route>
        <Route path="/signin">
          <Login 
          onLogin={onLogin}
          isError={isLoginError}
          setError={setIsLoginError}
          isFormSent={isFormSent}
          setIsFormSent={setIsFormSent}/>
        </Route>
          <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
