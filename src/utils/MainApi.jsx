export const BASE_URL = 'https://api.kinofilm.nomoredomains.work'
class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  _getRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._getRes);
  }
  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._getRes);
  }
  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({
        country: movie.country || "данные отсутствуют",
        director: movie.director || "данные отсутствуют",
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink
        ? movie.trailerLink.startsWith('https')
            ? movie.trailerLink
            : 'https://www.youtube.com'
          : 'https://www.youtube.com',
        nameRU: movie.nameRU || 'null',
        nameEN: movie.nameEN || 'null',
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        movieId: movie.id.toString(),
      })
    })
    .then(this._getRes)
  }
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._getRes)
  }
  updateUser(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({name, email})
    })
    .then(this._getRes)
  }
}
const api = new Api({
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api