import SectionTitle from "../SectionTitle/SectionTitle"

function AboutProject() {
  return(
    <section  id="aboutProject" className="aboutProject">
      <SectionTitle name="О Проекте"/>
      <div className="aboutProject__container">
        <div className="aboutProject__info">
          <p className="aboutProject__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__info">
          <p className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__timeline">
        <p className="aboutProject__timeline-text">1 неделя</p>
        <p className="aboutProject__timeline-text">4 недели</p>
      </div>
      <div className="aboutProject__format">
        <p className="aboutProject__format-text">Back-end</p>
        <p className="aboutProject__format-text">Front-End</p>
      </div>
    </section>
  )
}
export default AboutProject