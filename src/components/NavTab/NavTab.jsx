import AboutProject from '../AboutProject/AboutProject'

function NavTab() {
  function scroll(e) {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  }
  return(
    <section className="navtab">
      <nav className="navtab__container">
        <a className="navtab__link" onClick={scroll} href="#aboutProject">О проекте</a>
        <a className="navtab__link" onClick={scroll} href="#techs">Технологии</a>
        <a className="navtab__link" onClick={scroll} href="#aboutMe">Студент</a>
      </nav>
    </section>
  )
}
export default NavTab