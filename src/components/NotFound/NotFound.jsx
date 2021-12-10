import { Link } from 'react-router-dom';
function NotFound() {
  return(
    <section className='not-found'>
      <p className="not-found__error">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="not-found__back" to='/'>
        Назад
      </Link>
    </section>
  )
}
export default NotFound