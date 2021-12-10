import arrow from "../../images/linkarrow.svg"
import minilinkarrow from "../../images/minilinkarrow.svg"
function Portfolio() {
  return(
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__container">
        <li className="portfolio__items">
          <a className="portfolio__item" href="https://github.com/arklit/how-to-learn" target="_blank" rel="noopener noreferrer">Статичный сайт</a>
          <img className="portfolio__img" src={minilinkarrow} alt="ссылка на проект"/>
        </li>
        <li className="portfolio__items">
          <a className="portfolio__item" href="https://github.com/arklit/russian-travel" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
          <img className="portfolio__img" src={minilinkarrow} alt="ссылка на проект"/>
        </li>
        <li className="portfolio__items">
          <a className="portfolio__item" href="https://github.com/arklit/react-mesto-auth" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
          <img className="portfolio__img" src={minilinkarrow} alt="ссылка на проект"/>
        </li>
      </ul>
    </section>
  )
}
export default Portfolio