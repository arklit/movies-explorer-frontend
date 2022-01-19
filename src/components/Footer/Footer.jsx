
function Footer() {

  return(
    <footer className="footer">
      <div className="footer__title-container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__container">
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/arklit" target="_blank" rel="noopener noreferrer">Github</a>
          <a className="footer__link" href="https://vk.com/klimoutside" target="_blank" rel="noopener noreferrer">Вконтакте</a>
        </div>
        <p className="footer__year">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
export default Footer