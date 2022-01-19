import SectionTitle from "../SectionTitle/SectionTitle"
import photo from "../../images/patrik.jpg"

function AboutMe() {
  return(
    <section id="aboutMe" className="aboutMe">
      <SectionTitle name="Студент"/>
      <div className="aboutMe__container">
        <div className="aboutMe__photo-container">
          <img className="aboutMe__photo" src={photo} alt="фотка"/>
        </div>
        <div className="aboutMe__info">
          <p className="aboutMe__name">Артем</p>
          <p className="aboutMe__job">Фронтенд-разработчик, 22 года</p>
          <p className="aboutMe__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="aboutMe__links">
            <a href="https://github.com/arklit" target="_blank" rel="noopener noreferrer" className="aboutMe__link">Github</a>
            <a href="https://vk.com/klimoutside" target="_blank" rel="noopener noreferrer" className="aboutMe__link">Вконтакте</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutMe